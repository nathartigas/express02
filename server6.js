//incorporar respostas a partir de outros arquivos
const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log ('servidor no ar')
})

const funcoes=require('./functions.js')

//adição
app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado =funcoes.add(a,b);
    res.send(`a soma de ${a} e ${b} é igual a ${resultado}`);
})

//subtração
app.get('/sub/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado =funcoes.sub(a,b);
    res.send(`a subtração de ${a} e ${b} é igual a ${resultado}`);
})

//multiplicação
app.get('/mult/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado =funcoes.mult(a,b);
    res.send(`a multiplicação de ${a} e ${b} é igual a ${resultado}`);
})

//divisão
app.get('/div/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const resultado =funcoes.div(a,b);
    res.send(`a divisão de ${a} e ${b} é igual a ${resultado}`);
})