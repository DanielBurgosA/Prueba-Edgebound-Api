//importaciones 
const express = require ('express')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const routes = require ('../routes/index');

//definición del server
const server = express();
server.name = 'API'

// configuración de middlewares body y cookies en caso futuro de implementar el put, delete, post
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

//middlewaere para las rutas
server.use('/', routes);

//endware para errores
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.mesage || err;
    console.error(err);
    res.status(status).send(message)
})

module.exports = server;