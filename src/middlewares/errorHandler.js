import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(erro, req, res, next){
  if (erro instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendReply(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendReply(res);
  } else if (erro instanceof NotFound) {
    new NotFound().sendReply(res);
  } else {
    new BaseError().sendReqply(res);
  }
}

export default errorHandler;