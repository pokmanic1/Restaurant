import mongoose, { Schema, models, model } from 'mongoose';

export interface IRecenzie {
    nume: string;
    titlu: string;
    nota: string;
    recenzie: string;
    createdAt?: Date;
}

const RecenzieSchema = new Schema<IRecenzie>(
    {
        nume: {
            type: String,
            required: false
        },
        titlu: {
            type: String,
            required: true
        },
        nota: {
            type: String,
            required: true
        },
        recenzie: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const RecenzieDB = models.Recenzie || model<IRecenzie>('Recenzie', RecenzieSchema);

export default RecenzieDB