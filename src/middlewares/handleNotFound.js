import NotFound from "../errors/NotFound.js";

function handleNotFound(req, res, next) {
  const error404 = new NotFound();
  next(error404);
}

export default handleNotFound;