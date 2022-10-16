import express = require('express');
import bodyParser = require("body-parser");

var taserver = express();

var alunos = [{nome:'Paulo',cpf:'nail',email:'phmb@cin.br',metas:{'requisitos':'MA'}},{nome:'Mariana',cpf:'456',email:'@mcb@cin.br',metas:{'requisitos':'MPA'}}];

var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get('/', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(alunos));
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
  var alunos = Number(req.body);
  res.send("Mensagem Recebida!");
})

taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})