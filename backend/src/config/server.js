const port = 3003;//porta que vou usar no servidor

const bodyParser = require("body-parser") //vai fazer o parse do corpo
const express = require("express") //esse é o servidor web que roda no node

//aqui cada vez que chama esse comando será uma instancia diferente
const server = express();
const allowCors = require('./cors')

//no servidor adiciona alguns middleware  

//aqui é sempre quando chegar uma requisição urlencoded(submissão de forms)
//extended que roda mais dados
server.use(bodyParser.urlencoded({extended: true}))

//fazer outro parse para json com cada requisição
server.use(bodyParser.json())
server.use(allowCors)
//registro da porta
server.listen(port, ()=>{
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server