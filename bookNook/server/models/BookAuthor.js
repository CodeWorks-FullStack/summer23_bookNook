import { Schema } from "mongoose";

export const BookAuthorSchema = new Schema({

  bookId: { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
  authorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }

}, { timestamps: true, toJSON: { virtuals: true } })

BookAuthorSchema.virtual('book', {
  justOne: true,
  localField: 'bookId',
  foreignField: '_id',
  ref: 'Book'
})

BookAuthorSchema.virtual('author', {
  localField: 'authorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})