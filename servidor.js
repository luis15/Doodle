var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');


app.post('/enviar', function (req, res) {
  console.log("POST");
       req.on('data', function (data) {
           var body = JSON.parse(data);
           console.log(body.assunto);
           res.writeHead(200, {'Content-Type': 'text/html'});
           res.end(JSON.stringify(body));
       });
})
var server = app.listen(1000, function (req, res) {

  var host = server.address().address
  var port = server.address().port

  console.log("O exemplo está rodando em http://%s:%s", host, port)

})
