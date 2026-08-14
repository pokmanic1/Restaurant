import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import RecenzieDB from "@/lib/models/recenzii";
import { data } from "framer-motion/client";


export async function GET() {
    try {
        await connectDB();
        const recenzii = await RecenzieDB.find({});
        
        return NextResponse.json({ message: 'succes' ,data:recenzii}, { status: 200 });
    } catch (err: any) {
        console.error('Eroare GET Programari:', err.message);
        return NextResponse.json({ message: 'error', error: err.message }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {

    try {
        await connectDB()
        const { nume, titlu, nota, recenzie } = await req.json();
        if (!titlu || !nota || !recenzie) {
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