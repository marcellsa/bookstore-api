import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes
  .post("/livros", BookController.createBook)
  .get("/livros", BookController.getBooks);

export default routes;