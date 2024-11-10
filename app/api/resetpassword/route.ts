import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();
prisma.$connect();

export async function POST(request: NextRequest){
    try {
        const {id, password} = await request.json();

        if(!id || !password){
            return NextResponse.json({
                success: false,
                message: "Credentials required"
            }, {
                status: 400
            })
        }
        
        const user = await prisma.user.findUnique({
            where: {
                id: id
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

        const hashedPassword = await bcrypt.hash(password, 10)

        const updatedOtp = await prisma.user.update({
            where: { id: id }, 
            data: { password: hashedPassword },
        });

        if(!updatedOtp){
            return NextResponse.json({
                success: false,
                message: "password reset failed"
            }, {
                status: 500
            })
        }        

        return NextResponse.json({
            success: true,
            message: "Password reset successfully",
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
        prisma.$disconnect()
    }
}