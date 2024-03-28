import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes
  .post("/livros", BookController.createBook)
  .get("/livros", BookController.getBooks)
  .get("/livros/busca", BookController.getBooksByPublisher)
  .get("/livros/:id", BookController.getBookById)
  .put("/livros/:id", BookController.updateBook)
  .delete("livros/:id", BookController.deleteBook);

export default routes;