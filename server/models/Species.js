import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema({
    name: { type: String, required: true, maxlength: 25 },
    img: { type: String, required: true, maxlength: 500 },
    moonId: { type: ObjectId, required: true, ref: 'Species'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)