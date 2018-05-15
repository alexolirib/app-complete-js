const server = require('./config/server');
require('./config/database');

//passando o server como parametro pois está invocando um método
require('./config/routes')(server);
