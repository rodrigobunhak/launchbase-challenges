const express = require('express')
const teachers = require('./teachers')
const routes = express.Router()

routes.get('/', function(req, res) {
  return res.redirect('/teachers')
})

routes.get('/teachers', teachers.index)

routes.get('/teachers/create', function(req, res) {
  return res.render('teachers/create')
})

//* form route, get function of teacher file
routes.post("/teachers", teachers.post)

routes.get("/teachers/:id", teachers.show)

routes.get("/teachers/:id/edit", teachers.edit)

routes.put("/teachers", teachers.put)

routes.delete("/teachers", teachers.delete)



routes.get("/students", function(req, res) {
  return res.render("layout")
})

//* export routes 
module.exports = routes