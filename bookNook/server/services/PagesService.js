import { dbContext } from "../db/DbContext.js"
import { booksService } from "./BooksService.js"

class PagesService {
  async getPagesByBookId(bookId) {
    // const pages = await dbContext.Pages.find({ chapterNumber: 1 })
    const pages = await dbContext.Pages.find({ bookId: bookId })

    return pages
  }
  async createPage(pageData) {
    await booksService.getBookById(pageData.bookId)

    const page = await dbContext.Pages.create(pageData)

    return page
  }

}

export const pagesService = new PagesService()