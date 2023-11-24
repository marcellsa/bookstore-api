import axios from 'axios';
// import BookController from '../../src/controllers/bookController.js';

describe('BookController', () => {
  it('should get a list of books', async () => {
    const response = await axios({
      url: 'http://localhost:3000/livros',
      method: 'get',
    });

    expect(response.data).toHaveLength(4);
  });

  it('should save a book', async () => {
    const data = {
      titulo: 'Título Test1 1',
      editora: 'Editora Teste 1',
      preco: 99.99,
      paginas: 100,
    };

    const response = await axios({
      url: 'http://localhost:3000/livros',
      method: 'post',
      data,
    });

    const bookTest = response.data;

    expect(bookTest.titulo).toBe(data.titulo);
  });
});
