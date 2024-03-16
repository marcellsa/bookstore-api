import express from "express";
import connectToDatabase from "./config/database.js";
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

// eslint-disable-next-line no-unused-vars
app.use((erro, req, res, next) => {
  res.status(500).send({ message: "Erro interno do servidor" });
});

export default app;