import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { bookAuthorsService } from "../services/BookAuthorsService.js";

export class BookAuthorsController extends BaseController {
  constructor () {
    super('api/bookAuthors')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBookAuthor)
  }
  async createBookAuthor(req, res, next) {
    try {

      const bookAuthorData = req.body

      bookAuthorData.authorId = req.userInfo.id

      const bookAuthor = await bookAuthorsService.createBookAuthor(bookAuthorData)

      return res.send(bookAuthor)
    } catch (error) {
      next(error)
    }
  }
}