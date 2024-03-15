import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes
  .post("/autores", AuthorController.createAuthor)
  .get("/autores", AuthorController.getAuthors)
  .get("/autores/:id", AuthorController.getAuthorById)
  .put("/autores/:id", AuthorController.updateAuthor)
  .delete("/autores/:id", AuthorController.deleteAuthor);

export default routes;