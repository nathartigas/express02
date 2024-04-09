const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log ('servidor em execução')
})

// dados dos clientes
const clientes = [
    {id:1, nome:'altamiro', telefone: '111111111', email:'alta@gmail.com'},
    {id:2, nome:'beringelida', telefone: '222222222', email:'berin@gmail.com'},
    {id:3, nome:'conegundes', telefone: '333333333', email:'cone@gmail.com'},
    {id:4, nome:'desiderio', telefone: '444444444', email:'desi@gmail.com'},
    {id:5, nome:'emengardo', telefone: '555555555', email:'emen@gmail.com'},
]
//rotas
app.get('/',(req,res)=>{
    res.send('API de clientes');
})

//rota com o total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('o total de clientes: '+clientes.length);
})

//rota para apresentar dados de um  cliente especifico
app.get('/clientes/:id',(req,res)=>{
    const cliente =clientes.find(c=>c.id===parseInt(req.params.id));

    //se nao existir o cliente
    if(!cliente) res.status(404).send('cliente nao encontrado');

    //o cliente existe 
    res.send(`o cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email}`)
})