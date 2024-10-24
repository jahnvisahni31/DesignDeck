
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        const response = NextResponse.json({
            success: true,
            message: "logged out successfully"
        }, {
            status: 200
        })
        response.cookies.delete("token")

        return response
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    }
}