import mongoose from "mongoose";


const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema({
    name: { type: String, required: true, maxlength: 25 },
    img: { type: String, required: true, maxlength: 500 },
    galaxyId: { type: ObjectId, required: true, ref: 'Galaxies'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)