import book from "../models/Book.js";

class BookController {
  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Livro cadastrado com sucesso", book: newBook });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha no cadastro do livro` });
    }
  }

  static async getBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async getBookById(req, res) {
    try {
      const { id } = req.params;
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  
}

export default BookController;