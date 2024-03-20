import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O título do livro é obrigatório"] },
  editora: { type: String, required: [true, "A editora é obrigatória"] },
  preco: { type: Number },
  paginas: { type: Number, 
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    }
  },
  autor: authorSchema
}, { versionKey: false });

const book = mongoose.model("livros", bookSchema);

export default book;