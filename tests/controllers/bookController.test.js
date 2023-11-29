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
      paginas: 200,
    };

    const response = await request(`${URL}/livros`, 'post', bookData2);

    const bookTest = response.data.book;

    expect(bookTest.titulo).toEqual(bookData2.titulo);
  });
});
