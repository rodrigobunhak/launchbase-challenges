const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.set("view engine", "njk")
nunjucks.configure("views", {
  express: server,
  noCache: true
})

server.use(express.static('public'))

server.get("/", function(req, res) {
  return res.render("teachers/index")
})

server.get("/students", function(req, res) {
  return res.render("layout")
})


server.listen(5000, function(){
  console.log('Server is running!')
})