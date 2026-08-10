import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import RecenzieDB from "@/lib/models/recenzii";


export async function GET(req: NextRequest) {

    return NextResponse.json({ message: "Success" }, { status: 202 });

}


export async function POST(req: NextRequest) {

    try {
        await connectDB()
        const { nume, titlu, nota, recenzie } = await req.json();
        if (!nume || !titlu || !nota || !recenzie) {
            return NextResponse.json({ message: "Toate câmpurile sunt obligatorii" }, { status: 400 });
        }
        const date = await RecenzieDB.create(
            {
                nume,
                titlu,
                nota,
                recenzie
            }
        )



        return NextResponse.json({ message: "Success", data: date }, { status: 202 });

    } catch (err) {
        return NextResponse.json({ message: "error", err: err }, { status: 401 });

    }

}