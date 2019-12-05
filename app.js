var express = require('express');
var app = express();


app.get('/exercicios/:quantidade', function(req, res) {
  let numeros
  let palavrasFoo = 0
  let palavrasBar = 0
  for(numeros = 1; numeros <= req.params.quantidade; numeros++) {
    if(numeros % 3 === 0) {
      palavrasFoo++
    }
    if(numeros % 5 === 0) {
      palavrasBar++
    }
  }
  res.status(200).send({
    message:"OK",
    execucoes: req.params.quantidade,
    palavrasFoo: palavrasFoo,
    palavrasBar: palavrasBar 
  })
  
});

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');

});