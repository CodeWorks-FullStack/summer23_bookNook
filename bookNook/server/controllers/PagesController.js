import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { pagesService } from "../services/PagesService.js";

export class PagesController extends BaseController {
  constructor () {
    super('api/pages')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPage)
  }
  async createPage(req, res, next) {
    try {
      const pageData = req.body

      const page = await pagesService.createPage(pageData)
      return res.send(page)
    } catch (error) {
      next(error)
    }
  }
}