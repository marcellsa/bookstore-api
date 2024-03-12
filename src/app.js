import express from "express";
import connectToDatabase from "./config/database.js";

const connection = await connectToDatabase();

connection.on("error", (erro) => {
  console.error("Erro na conexão com o banco de dados:", erro);
});

connection.once("open", () => {
  console.log("Conexão bem-sucedida! Banco de dados pronto para uso.");
});

const app = express();

export default app;