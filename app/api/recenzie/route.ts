import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Recenzie from "@/lib/models/recenzii";


export async function GET(req: NextRequest) {

    return NextResponse.json({ message: "Success" },{status:202});

}
export async function POST(req: NextRequest) {
    const body = await req.json();
    return NextResponse.json({ message: "Success", data: body },{status:202});

}