const express = require('express')
const teachers = require('./teachers')
const routes = express.Router()

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', function(req, res) {
  return res.render('teachers/index')
})

routes.get('/teachers/create', function(req, res) {
  return res.render('teachers/create')
})

//* form route, get function of teacher file
routes.post("/teachers", teachers.post)

routes.get("/students", function(req, res) {
  return res.render("layout")
})

routes.get("/teachers/:id", teachers.show)

routes.get("/teachers/:id/edit", function(req, res) {
  //TODO: criar página de alteração do cadastro de professores
  return res.send('...')
})


//* export routes 
module.exports = routes