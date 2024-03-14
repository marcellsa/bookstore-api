import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes
  .post("/livros", BookController.createBook)
  .get("/livros", BookController.getBooks)
  .get("/livris/:id", BookController.getBookById);

export default routes;