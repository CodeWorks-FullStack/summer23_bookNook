import { dbContext } from "../db/DbContext.js"
import { booksService } from "./BooksService.js"

class BookAuthorsService {
  async getBooksByAuthorId(authorId) {
    const books = await dbContext.BookAuthors.find({ authorId: authorId }).populate('book')

    return books

  }

  async getAuthorsByBookId(bookId) {
    const authors = await dbContext.BookAuthors.find({ bookId: bookId }).populate('author', 'name picture')

    return authors
  }
  async createBookAuthor(bookAuthorData) {

    await booksService.getBookById(bookAuthorData.bookId)

    const bookAuthor = await dbContext.BookAuthors.create(bookAuthorData)

    await bookAuthor.populate('book')

    await bookAuthor.populate('author', 'name picture')

    return bookAuthor
  }

}

export const bookAuthorsService = new BookAuthorsService()