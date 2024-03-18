import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

export default IncorrectRequest;