import { author } from "../models/Author.js";

class AuthorController {

  static async createAuthor (req, res, next) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: newAuthor });
    } catch (erro) {
      next(erro);
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

  static async getAuthorById (req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);
      if (authorFound != null){
        res.status(200).json(authorFound);
      } else {
        res.status(404).send({message: "Id do Autor não localizado."});
      }
    } catch (erro) {
      next(erro);
    }
  }  

  static async updateAuthor (req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findByIdAndUpdate(id, {$set: req.body});
      if (authorFound !== null){
        res.status(200).json({ message: "autor atualizado" });
      } else {
        res.status(404).send({message: "Id do Autor não localizado."});
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async deleteAuthor (req, res, next) {
    try {
      const id = req.params.id;
      const authorFound = await author.findByIdAndDelete(id);
      if (authorFound !== null){
        res.status(200).json({ message: "autor excluído com sucesso" });
      } else {
        res.status(404).send({message: "Id do Autor não localizado."});
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default AuthorController;