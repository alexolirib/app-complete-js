const Task = require("./task");

//com isso já foi criado uma api restFul
//aqui digo quais os metodos que quero que funcione
Task.methods(['get', 'post', 'put', 'delete']);

//por padão o update não atualiza certas coisas 
//por padrão não retorna o novo o antigo (new será o novo)
//runValidade não atualiza as validações como padrão
Task.updateOptions({ new: true, runValidators: true })

//exporto com a api rest funcionando 
module.exports = Task;