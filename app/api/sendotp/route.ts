import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { sendOtp } from "@/lib/sendMail";

const prisma = new PrismaClient();
prisma.$connect();

export async function POST(request: NextRequest){
    try {
        const {email} = await request.json();

        if(!email){
            return NextResponse.json({
                success: false,
                message: "Credentials required"
            }, {
                status: 400
            })
        }
        
        const user = await prisma.user.findUnique({
            where: {
                email: email
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

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        sendOtp(email, verifyCode);

        const updatedOtp = await prisma.user.update({
            where: { email: email }, 
            data: { otp: verifyCode },
        });

        if(!updatedOtp){
            return NextResponse.json({
                success: false,
                message: "Otp failed"
            }, {
                status: 500
            })
        }        

        console.log(user);
        

        return NextResponse.json({
            success: true,
            message: "OTP sent successfully",
            data: {id: user.id}
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