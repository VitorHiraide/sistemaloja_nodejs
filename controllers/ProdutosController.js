import express from "express";
const router = express.Router();
import Produto from "../Models/Produto.js";
import Auth from "../middleware/Auth.js";

router.get("/produtos", Auth, (req, res) => {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

router.post("/produtos/new", Auth, (req, res) => {
  const nome = req.body.nome;
  const valor = req.body.valor;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    valor: valor,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});

router.get("/produtos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    id: id,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/produtos/edit/:id", Auth, (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produtos) => {
      res.render("produtoEdit", {
        produtos: produtos,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/produtos/update", Auth, (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const valor = req.body.valor;
  const categoria = req.body.categoria;
  Produto.update({
    nome: nome,
    valor: valor,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
