import httpMocks from 'node-mocks-http';
import BookController from '../../src/controllers/bookController.js';
import BookModel from '../../src/models/Book.js';

const mockData = [
  {
    titulo: 'Livro 1',
    editora: 'Editora 1',
    preco: 19.99,
    paginas: 200,
  },
  {
    titulo: 'Livro 2',
    editora: 'Editora 2',
    preco: 29.99,
    paginas: 300,
  },
];

describe('BookController', () => {
  it('should get a list of books', async () => {
    // Mock a request and response
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    // Mock the find method of the Book model
    const mockFind = jest.spyOn(BookModel, 'find');
    mockFind.mockResolvedValue(mockData);

    // Call the controller method
    await BookController.getBooks(req, res);

    // Expectations/assertions
    expect(mockFind).toHaveBeenCalledWith({});
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.getData())).toEqual(mockData);
  });
});
