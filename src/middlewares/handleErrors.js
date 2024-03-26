import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function handleErrors(erro, req, res, next){
  if (erro instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendResponse(res);
  } else if (erro instanceof NotFound) {
    new NotFound().sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default handleErrors;