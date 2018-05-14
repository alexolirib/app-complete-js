//fazer mapeamento dos obj js para os doc do mongoose e fazer conexao
const mongoose = require('mongoose')
mongoose.Promise = global.Promise//usar api do promise do próprio node(vou nem usar)

//o banco vai ser app-complete 
module.exports = mongoose.connect('mongodb://localhost/app-complete')