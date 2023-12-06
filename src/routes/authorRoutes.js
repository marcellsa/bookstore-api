import express from 'express';
import AuthorController from '../controllers/authorController.js';

const routes = express.Router();

routes
  .get('/autores', AuthorController.getAuthors)
  .get('/autores/:id', AuthorController.getAuthorByID)
  .post('/autores', AuthorController.saveAuthor)
  .put('/autores/:id', AuthorController.updateAuthor)
  .delete('/autores/:id', AuthorController.deleteAuthor);

export default routes;
