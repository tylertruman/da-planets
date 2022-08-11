import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxlength: 25 },
    img: { type: String, required: true, maxlength: 500 },
    starId: { type: ObjectId, required: true, ref: 'Stars'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)