import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes
  .post("/livros", BookController.createBook)
  .get("/livros", BookController.getBooks)
  .get("/livris/:id", BookController.getBookById)
  .put("/livros/:id", BookController.updateBook)
  .delete("livris/:id", BookController.deleteBook);

export default routes;