import NotFound from "../errors/NotFound.js";

function notFoundHandler(req, res, next) {
  const erro404 = new NotFound();
  next(erro404);
}

export default notFoundHandler;