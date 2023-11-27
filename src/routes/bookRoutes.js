import express from 'express';
import BookController from '../controllers/bookController.js';

const routes = express.Router();

routes
  .get('/livros', BookController.getBooks)
  .get('/livros/:id', BookController.getBook)
  .post('/livros', BookController.saveBook)
  .put('/livros/:id', BookController.updateBook);

export default routes;
