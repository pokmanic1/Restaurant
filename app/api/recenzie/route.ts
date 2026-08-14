import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import RecenzieDB from "@/lib/models/recenzii";

export async function GET() {
    try {
        await connectDB();
        const recenzii = await RecenzieDB.find({});
        
        return NextResponse.json({ message: 'succes', data: recenzii }, { status: 200 });
    } catch (err: any) {
        console.error('Eroare GET Recenzii:', err.message);
        return NextResponse.json({ message: 'error', error: err.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { nume, titlu, nota, recenzie } = await req.json();

        if (!titlu || !nota || !recenzie) {
            return NextResponse.json({ message: "Toate câmpurile sunt obligatorii" }, { status: 400 });
        }

        const recenzieExistenta = await RecenzieDB.findOne({
            nume,
            titlu,
            recenzie
        });

        if (recenzieExistenta) {
            return NextResponse.json({ message: "Recenzia a fost deja creată", data: recenzieExistenta }, { status: 409 });
        }

        const date = await RecenzieDB.create({
            nume,
            titlu,
            nota,
            recenzie
        });

        return NextResponse.json({ message: "Success", data: date }, { status: 201 });

    } catch (err: any) {
        return NextResponse.json({ message: "error", error: err.message }, { status: 500 });
    }
}