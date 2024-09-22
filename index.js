import express from 'express'
const app = express();

import ClientesController from "./controllers/ClientesControlers.js"
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"

app.set("view engine","ejs")

app.use(express.static('public'))

app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)

app.get("/", (req,res) =>{
    res.render("index")
})

app.listen(8080, function(erro){
    if(erro){
        console.log(`Ocorreu um erro`)
    } else {
        console.log(`Servidor iniciado`)
    }
})
