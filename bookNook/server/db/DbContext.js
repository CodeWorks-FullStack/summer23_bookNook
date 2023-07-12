import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { BookSchema } from '../models/Book.js';
import { PageSchema } from '../models/Page.js';
import { BookAuthorSchema } from '../models/BookAuthor.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Books = mongoose.model('Book', BookSchema)

  Pages = mongoose.model('Page', PageSchema)

  BookAuthors = mongoose.model('BookAuthor', BookAuthorSchema)
}

export const dbContext = new DbContext()
