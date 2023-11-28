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

    await request(`${URL}/livros/${testBook.id}`, 'delete');
  });

  it.skip('should save a book', async () => {
    const bookData = {
      titulo: 'Título Test 1',
      editora: 'Editora Teste 1',
      preco: 99.99,
      paginas: 100,
    };

    const response = await request(`${URL}/livros`, 'post', bookData);

    const bookTest = response.data.book;

    expect(bookTest.titulo).toEqual(bookData.titulo);
  });
});
