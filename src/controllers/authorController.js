import author from '../models/Author.js';

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async getAuthorByID(req, res) {
    try {
      const { id } = req.params;
      const authorFound = await author.findById(id);
      res.status(200).json(authorFound);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async saveAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: 'Livro cadastrado com sucesso', author: newAuthor });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha no cadastro do(a) autor(a)` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const { id } = req.params;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Autor(a) atualizado(a)' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização do(a) autor(a)` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const { id } = req.params;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: 'Autor(a) excluído(a) com sucesso' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão do(a) autor(a)` });
    }
  }
}

export default AuthorController;
