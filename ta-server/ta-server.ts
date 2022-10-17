import express = require('express');
import bodyParser = require("body-parser");
import { Service } from './service';

var taserver = express();

var service: Service = new Service();

var allowCrossDomain = function(req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get('/', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify("Fast&Ship"));
})

taserver.get('/cart', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(service.getClient().getCart()));
})

taserver.get('/email', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(service.getClient().getEmail()));
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
  var alunos = Number(req.body);
  res.send("Mensagem Recebida!");
})

taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!!!');
})