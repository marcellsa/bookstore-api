/* eslint-disable no-underscore-dangle */
import axios from 'axios';
// import BookController from '../../src/controllers/bookController.js';

const URL = 'http://localhost:3000';

const request = (url, method, data) => axios({ url, method, data });

describe('BookController', () => {
  it('should get a list of books', async () => {
    const bookData1 = {
      titulo: 'Título Test',
      editora: 'Editora Teste',
      preco: 100.00,
      paginas: 100,
    };

    const testBook = await request(`${URL}/livros`, 'post', bookData1);

    const response = await request(`${URL}/livros`, 'get');

    expect(response.data).toHaveLength(3);

    await request(`${URL}/livros/${testBook.data.book._id}`, 'delete');
  });

  it('should save a book', async () => {
    const bookData2 = {
      titulo: 'Título Test 2',
      editora: 'Editora Teste 2',
      preco: 89.99,
      paginas: 150,
    };

    const response = await request(`${URL}/livros`, 'post', bookData2);

    const bookTest = response.data.book;

    expect(bookTest.titulo).toEqual(bookData2.titulo);

    await request(`${URL}/livros/${bookTest._id}`, 'delete');
  });

  it('should updtae a book', async () => {
    const bookData3 = {
      titulo: 'Título Test 3',
      editora: 'Editora Teste 3',
      preco: 79.99,
      paginas: 250,
    };

    const newBook = await request(`${URL}/livros`, 'post', bookData3);

    const savedBook = newBook.data.book;

    const updatedBook = {
      paginas: 200,
    };

    const response = await request(`${URL}/livros/${savedBook._id}`, 'put', updatedBook);

    expect(response.data).toEqual({ message: 'Livro atualizado' });

    await request(`${URL}/livros/${savedBook._id}`, 'delete');
  });
});
