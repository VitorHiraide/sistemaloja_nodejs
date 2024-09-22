import express from 'express'
const router = express.Router()

router.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "Felipe Mendes", cpf: " 888.999.000-88", endereco: "Rua das Acácias, 22 - Jardim das Pedras, Porto Alegre - RS "},
        {nome: "Carlos Pereira", cpf: "987.654.321-11", endereco: "Avenida Central, 200 - Centro, Rio de Janeiro - RJ"},
        {nome: "João Santos", cpf: "111.222.333-44", endereco: "Rua do Mar, 78 - Vila dos Ventos, Salvador - BA"},
        {nome: "Rafael Costa",cpf: " 222.333.444-55", endereco: "Avenida das Palmeiras, 300 - Praia do Forte, Natal - RN"}
    ]
    res.render("clientes", {
        clientes : clientes
    })
})
 export default router