import IncorrectRequest from "./IncorrectRequest.js";

class ValidationError extends IncorrectRequest {
  constructor(erro) {
    const errorMessage = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${errorMessage}`);
  }
}

export default ValidationError;