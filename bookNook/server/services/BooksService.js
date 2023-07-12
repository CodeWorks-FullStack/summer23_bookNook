import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class BooksService {

  async getBooks() {
    const books = await dbContext.Books.find()

    return books
  }

  async createBook(bookData) {
    const book = await dbContext.Books.create(bookData)

    return book
  }

  async getBookById(bookId) {
    const book = await dbContext.Books.findById(bookId)

    if (!book) {
      throw new BadRequest('Invalid ID')
    }

    return book
  }

}

export const booksService = new BooksService()