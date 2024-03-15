import { author } from "../models/Author.js";

class AuthorController {

  static async createAuthor (req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: newAuthor });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async getAuthors (req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async getAuthorById (req, res) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);
      res.status(200).json(authorFound);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
    }
  }  

  static async updateAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async deleteAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default AuthorController;