import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
prisma.$connect();

export async function POST(request: NextRequest){
    try {
        const {id, otp} = await request.json();
        

        if(!id || !otp){
            return NextResponse.json({
                success: false,
                message: "Credentials required"
            }, {
                status: 400
            })
        }
        
        const user = await prisma.user.findFirst({
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

        if(user.otp != otp){
            return NextResponse.json({
                success: false,
                message: "Invalid OTP"
            }, {
                status: 400
            })
        }

        const updatedOtp = await prisma.user.update({
            where: { id: id }, 
            data: { otp: "" },
        });

        if(!updatedOtp){
            return NextResponse.json({
                success: false,
                message: "Otp failed"
            }, {
                status: 500
            })
        }        

        return NextResponse.json({
            success: true,
            message: "OTP Verified",
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