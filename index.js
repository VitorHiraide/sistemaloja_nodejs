import express from "express";
const app = express();
import connection from "./Config/sequelize-config.js";

import ClientesController from "./controllers/ClientesControlers.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";
import session from "express-session";

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com banco de dados feita com sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS SistemaLoja;`)
  .then(() => {
    console.log("O banco de dados foi criado");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log(`Ocorreu um erro`);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
