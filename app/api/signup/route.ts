import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

interface Data {
    username: string,
    email: string,
    password: string
}

prisma.$connect()

export async function POST(request: NextRequest) {
    try {
        const {username, email, password}: Data = await request.json();

        const user = await prisma.user.findMany({
            where: {
                AND: [
                    { username: username },
                    { email: email }
                  ]
            }
        })

        if(user.length>0){
            return NextResponse.json({
                success: false,
                message: "User with these credentials already exist"
            }, {
                status: 400
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })

        if(!newUser){
            return NextResponse.json({
                success: false,
                message: "User creation failed"
            }, {
                status: 500
            })
        }

        console.log(newUser);

        return NextResponse.json({
            success: true,
            data: newUser
        }, {
            status: 200
        })
    } catch (error: any) {
        return NextResponse.json({
                success: false,
                message: error.message
            }, {
                status: 500
            })
    } finally {
        await prisma.$disconnect()
    }
}