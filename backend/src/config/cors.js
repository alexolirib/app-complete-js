//criado o middleware
module.exports = (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')//permite acesso de qual quer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //uns cabeçalhos que precisa fazer as permissôes necessárias
    res.header('Acess-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
    next()//continua o fluxo da aplicação 
}