const express = require("express")
const exphbs = require("express-handlebars") 

const app = express()

app.get('/', (requisicao, resposta) =>{
    resposta.send("Ola, mundo")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})