const express = require('express');

var morgan = require('morgan');

const server=express();

server.listen(3000);

//criar o arquivo de logs
// server.use(morgan('tiny'));
server.use(morgan('Metodo = :method | status = :status | Url = :url'));

server.get('/',(req,res)=>{
    res.send('teste')
})