const express = require('express') //importando o express do próprio express
const route = require("./route") //importando a rota criada
const path = require("path")//definindo onde será encontrado a pasta views(o q será visualizado); caminho da pasta

const server = express() //executando o express

server.set("view engine", "ejs") //definindo como a funciona, modulo de renderiação do ejs;

server.use(express.static("public"))//ddefinindo o que será mostrado para usuario(public), qual pasta o express vai usar para isso; de modo estático.

server.set("views", path.join(__dirname, "views")) //definindo onde as rotas serão encontrados, caminho, __dirname = arquivo;

server.use(express.urlencoded({extended: true}))

server.use(route) //defini o uso da rota

server.listen(3000, () => console.log("Running"))//Defini qual é a porta, o que será "escutado"
