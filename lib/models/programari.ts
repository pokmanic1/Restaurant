import mongoose, { Schema, models, model } from 'mongoose';

export interface IProgramari {
    nume: string,
    telefon: string,
    data: string,
    persoane: string,
    ora: string,
    locatie: string,
    createdAt?: Date;

}

const ProgramariShema = new Schema<IProgramari>(
    {
        nume: {
            type: String,
            required: true
        },
        telefon: {
            type: String,
            required: true
        },
        data: {
            type: String,
            required: true
        },
        persoane: {
            type: String,
            required: true
        },
        ora: {
            type: String,
            required: true
        },
        locatie: {
            type: String,
            required: true
        },
    },
    {
        timestamps:true
    }
);


 const ProgramariDB = models.Programari || model<IProgramari>('Programari',ProgramariShema);
 export default ProgramariDB