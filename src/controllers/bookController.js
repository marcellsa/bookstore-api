import book from "../models/Book.js";
import { author } from "../models/Author.js";

class BookController {
  
  static async createBook(req, res, next) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.autor);
      const completeBook = { ...newBook, autor: {...authorFound._doc}};
      const bookCreated  = await book.create(completeBook);
      res.status(201).json({ message: "Livro cadastrado com sucesso", livro: bookCreated });
    } catch (erro) {
      next(erro);
    }
  }

  static async getBooks(req, res, next) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (erro) {
      next(erro);
    }
  }

  static async getBookById(req, res, next) {
    try {
      const { id } = req.params;
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (erro) {
      next(erro);
    }
  }
  
  static async updateBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deleteBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }

  static async getBooksByPublisher (req, res) {
    const publisher = req.query.editora;
    try {
      const booksByPublisher = await book.find({ editora: publisher });
      res.status(200).json(booksByPublisher);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }

}

export default BookController;