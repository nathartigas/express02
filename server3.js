//colocando parametros nas rotas

const express = require('express');

const server = express();

server.listen(3000,()=>{
    console.log('servidor em execução')
})

app.get('/',(req,res)=>{
    res.send('Teste1')
})

app.get('/ola/:nome',(req,res)=>{
    res.send('Teste2')
    res.send('teste2, tudo bem'+req.params.nome+'?');
})

//rota 2 parametros
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send('teste3, tudo bem'+req.params.nome+'da empresa'+req)
})

//rota com soma de parametro
app.get('/soma/:a/:b',(req,res)=>{
    res.send('resultado da soma é: '+(parseInt(req.params.a))+(parseInt+(req.params.b)));
})