import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();
prisma.$connect();

export async function POST(request: NextRequest){
    try {
        const {username, password} = await request.json();

        if(!username || !password){
            return NextResponse.json({
                success: false,
                message: "Credentials required"
            }, {
                status: 400
            })
        }
        
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if(!user){
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {
                status: 404
            })
        }

        const correctPassword = await bcrypt.compare(password, user.password)

        if(!correctPassword){
            return NextResponse.json({
                success: false,
                message: "Incorrect Credentials"
            }, {
                status: 404
            })
        }

        const tokenData = {
            id: user.id,
            username: user.username,
            email: user.email
        }
        
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})

        const response = NextResponse.json({
            success: true,
            message: "Logged in successfully",
            data: tokenData
        }, {
            status: 200
        })

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true
        })
        

        return response
        
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    } finally {
        prisma.$disconnect()
    }
}