//aqui faço o mapeio do meu obj para o mongo
const restful = require('node-restful');
const mongoose = restful.mongoose

const taskSchema = new mongoose.Schema({
    description: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, default: Date.now} //registrar a data da tareja
})

// agora fazer exports do esquema que criei
//restful.model(nome do modelo, esquema criado )
module.exports = restful.model('Task', taskSchema)