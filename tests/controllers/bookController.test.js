/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals';
import BookController from '../../src/controllers/bookController.js';
import book from '../../src/models/Book.js';

describe('BookController', () => {
  it('should return a list of books', async () => {
    // Arrange
    const mockBooks = [{
      titulo: 'Título Test 2',
      editora: 'Editora Teste 2',
      preco: 89.99,
      paginas: 150,
    }];

    // Mocking the 'find' method on the book module
    jest.spyOn(book, 'find').mockResolvedValue(mockBooks);

    // Creating a mock response object with status and json methods
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Act
    await BookController.getBooks({}, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockBooks);
  });
});
