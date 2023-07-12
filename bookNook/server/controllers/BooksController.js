import { Auth0Provider } from "@bcwdev/auth0provider";
import { booksService } from "../services/BooksService.js";
import BaseController from "../utils/BaseController.js";
import { pagesService } from "../services/PagesService.js";
import { bookAuthorsService } from "../services/BookAuthorsService.js";

export class BooksController extends BaseController {
  constructor () {
    super('api/books')
    this.router
      .get('', this.getBooks)
      .get('/:bookId', this.getBookById)
      .get('/:bookId/pages', this.getPagesByBookId)
      .get('/:bookId/authors', this.getAuthorsByBookId)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBook)
  }




  async getBooks(req, res, next) {
    try {

      const books = await booksService.getBooks()

      return res.send(books)
    } catch (error) {
      next(error)
    }
  }

  async getBookById(req, res, next) {
    try {
      const bookId = req.params.bookId

      const book = await booksService.getBookById(bookId)

      return res.send(book)
    } catch (error) {
      next(error)
    }
  }

  async getAuthorsByBookId(req, res, next) {
    try {
      const bookId = req.params.bookId

      const authors = await bookAuthorsService.getAuthorsByBookId(bookId)

      return res.send(authors)
    } catch (error) {
      next(error)
    }
  }

  async getPagesByBookId(req, res, next) {
    try {

      const bookId = req.params.bookId

      const pages = await pagesService.getPagesByBookId(bookId)
      return res.send(pages)
    } catch (error) {
      next(error)
    }
  }

  async createBook(req, res, next) {
    try {

      const bookData = req.body

      const book = await booksService.createBook(bookData)

      return res.send(book)
    } catch (error) {
      next(error)
    }
  }
}