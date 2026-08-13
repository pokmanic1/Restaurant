import mongoose from "mongoose";
import ProgramariDB from "@/lib/models/programari";
import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/lib/db";

export async function GET(){
    return NextResponse.json({message:'succes'},{status:200})
}
export async function POST(req:NextRequest){
    const {nume,titlu,data,persoane,ora,locatie}=await req.json();
    
    const body={nume,titlu,data,persoane,ora,locatie}
    console.log(body)
    
    return NextResponse.json({message:'succes',data:body},{status:200})

}