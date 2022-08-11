import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({
    name: { type: String, required: true, maxlength: 25},
    img: { type: String, required: true, maxlength: 500},
    planetId: { type: ObjectId, required: true, ref: 'Planets'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)