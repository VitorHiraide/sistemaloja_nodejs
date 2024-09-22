import express from 'express'
const router = express.Router()

router.get("/pedidos", (req,res) => {
    const pedidos = [
        {numero: "1001", valor: 2500},
        {numero: "1002", valor: 600},
        {numero: "1003", valor: 200},
        {numero: "1004", valor: 40}
    ]
    res.render("pedidos", {
        pedidos : pedidos
    })
})

export default router