const express = require("express") //importando o express do próprio express
const route = express.Router() //"importando" as rotas do express; chamando a propriedade de rotas do express;
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController")

route.get("/", (req, res) => res.render("index", {page: "enter-room"})); //definindo a rota, com req(requisição) e res(resposta) como parâmetros e indicando oq será respondido.
route.get("/create-pass", (req, res) => res.render("index", {page: "create-pass"}))
// route.get("/room-empty", (req, res) => res.render("room-empty"))

route.post("/create-room", roomController.create);
route.get("/room/:roomid", roomController.open)
route.post("/enterRoom", roomController.enter)

route.post('/roomquestion/create/:roomid', questionController.create)
route.post("/roomquestion/:roomid/:question/:action", questionController.index);


module.exports = route //exportando as rotas de rotas

// Formato form