//rotas com hifens e pontos
const express = require('express');
const app = express();
app.listen(3000,()=>{
    console.log ('servidor no ar')
})

//rota base
app.get('/',(req,res)=>{
    res.send('teste com parametros')
})

//rotas com hifen
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;
    const distancia=pontoB-pontoA;
    res.send(`a distancia, usando hifen, entre ${pontoA} e ${pontoB} é ${distancia}`)
})

//rotas com ponto
app.get('/distancia/:pontoA.:pontoB',(req,res)=>{
    const pontoA=req.params.pontoA;
    const pontoB=req.params.pontoB;
    const distancia=pontoB-pontoA;
    res.send(`a distancia, usando ponto, entre ${pontoA} e ${pontoB} é ${distancia}`)
})