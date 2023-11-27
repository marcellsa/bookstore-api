import axios from 'axios';
// import BookController from '../../src/controllers/bookController.js';

describe('BookController', () => {
  it.skip('should get a list of books', async () => {
    const response = await axios({
      url: 'http://localhost:3000/livros',
      method: 'get',
    });

    expect(response.data).toHaveLength(4);
  });

  it('should save a book', async () => {
    const bookData = {
      titulo: 'Título Test1 1',
      editora: 'Editora Teste 1',
      preco: 99.99,
      paginas: 100,
    };

    const response = await axios({
      url: 'http://localhost:3000/livros',
      method: 'post',
      data: bookData,
    });

    console.log(response.data.book);

    const bookTest = response.data.book;

    expect(bookTest.titulo).toEqual(bookData.titulo);
  });
});
