import express from 'express'
const router = express.Router()

router.get("/produtos",(req,res) => {
    const produtos = [
        {nome: "Smartphone X100", preco: 2500, categoria: "Eletrônicos"},
        {nome: "Cafeteira Automática", preco: 600, categoria: "Eletrodomésticos"},
        {nome: "Mochila Impermeável", preco: 200, categoria: "Acessórios"},
        {nome: "O Aprendiz de Feiticeiro", preco: 40, categoria: "Livros"}
    ]
    res.render("produtos", {
        produtos : produtos
    })
})

export default router