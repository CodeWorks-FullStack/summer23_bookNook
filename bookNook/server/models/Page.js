import { Schema } from "mongoose";

export const PageSchema = new Schema({

  chapterNumber: { type: Number, required: true, min: 0 },
  content: { type: String, required: true, maxlength: 1000 },
  bookId: { type: Schema.Types.ObjectId, required: true, ref: 'Book' }

}, { timestamps: true, toJSON: { virtuals: true } })