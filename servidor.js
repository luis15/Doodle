var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var email = require('./lib/email');

app.post('/enviar', function (req, res) {
  console.log("POST");
   req.on('data', function (data) {
       var body = JSON.parse(data);
       if(body.senha == 'XdqhRgznkPbW6raRXwEE3ML'){
         email.enviarEmailContato(body.remetente, body.destinatarios, body.assunto, body.mensagem);
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(JSON.stringify(body));
       }
       else{
         res.writeHead(401, {'Content-Type': 'text/html'});
         res.end("Eu acho que você não deveria estar fazendo isso!");
       }
       /*.then((body)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(JSON.stringify(body));
       })
       .catch((e) =>{
         res.writeHead(500, {'Content-Type': 'text/html'});
         res.end(e);
       })*/
   });
})
app.get('/', function (req, res) {
  res.end("Olá curioso, o que faz por aqui?");
})
var server = app.listen(1000, function (req, res) {

  var host = server.address().address
  var port = server.address().port

  console.log("O exemplo está rodando em http://%s:%s", host, port)

})
