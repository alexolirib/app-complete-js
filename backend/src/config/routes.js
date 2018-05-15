//quando pega require em uma biblioteca será mesma instancia 
const express = require('express')

//bom passar o server para o meu arquivos de rotas, para mapear as rotas dele
module.exports = server => {
    const router = express.Router();

    //middleware
    //sempre que utilizar o '/api' o router é chamado
    server.use('/api', router)

    //Task Routes
    const TaskService = require('../api/task/taskService')
    
    //feita a configuração 
    //o register vai utilizar todos os metodos registado o taskService (get, post,...)
    //register é do restful (cria no router, url base)
    TaskService.register(router, '/task')
}