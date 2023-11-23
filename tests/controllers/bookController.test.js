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
});
