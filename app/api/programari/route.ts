import mongoose from "mongoose";
import ProgramariDB from "@/lib/models/programari";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function GET() {
    try {
        await connectDB();
        const programari = await ProgramariDB.find({});
        return NextResponse.json({ message: 'succes', data: programari }, { status: 200 });
    } catch (err: any) {
        console.error('Eroare GET Programari:', err.message);
        return NextResponse.json({ message: 'error', error: err.message }, { status: 500 });
    }
}


export async function POST(req: NextRequest) {

    try {

        await connectDB();

        const { nume, telefon, data, persoane, ora, locatie } = await req.json();


        if (!nume || !telefon || !data || !persoane || !ora || !locatie) {
            return NextResponse.json({ message: "Toate câmpurile sunt obligatorii" }, { status: 400 });
        }


        const body = { nume, telefon, data, persoane, ora, locatie }
        console.log(body)

        const Data = await ProgramariDB.create({
            nume,
            telefon,
            data,
            persoane,
            ora,
            locatie
        })


        return NextResponse.json({ message: 'succes', data: Data }, { status: 200 })


    } catch (err: any) {
        console.log('err: ', err.message);

        return NextResponse.json(
            { message: 'error', error: err.message },
            { status: 400 }
        );
    }

}