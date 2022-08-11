import mongoose from "mongoose";

const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxlength: 25},
    img: { type: String, required: true, maxlength: 500}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)