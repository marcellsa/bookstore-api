import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes
  .post("/livros", BookController.createBook);

export default routes;