import express from "express";
import connectToDatabase from "./config/database.js";
import handleNotFound from "./middlewares/handleNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (erro) => {
  console.error("Erro na conexão com o banco de dados:", erro);
});

connection.once("open", () => {
  console.log("Conexão bem-sucedida! Banco de dados pronto para uso.");
});

const app = express();
routes(app);
app.use(handleNotFound);

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

export default app;