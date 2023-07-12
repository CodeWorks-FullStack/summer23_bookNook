import { Schema } from "mongoose";

export const BookSchema = new Schema({

  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 500 },
  isHardcover: { type: Boolean, default: false }

}, { timestamps: true, toJSON: { virtuals: true } })