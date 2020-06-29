const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

const courses = require('./data')


server.set("view engine", "njk")
nunjucks.configure("views", {
  express: server,
  noCache: true
})

server.use(express.static('public'))

server.get("/", function(req, res) {
  return res.render("courses", {courses})
})

server.get("/about", function(req, res) {
  return res.render("about")
})

server.get("/course", function(req, res) {
  const id = req.query.id
  console.log(id)

  const course = courses.find(function(course){
    if (course.id == id) {
      return true
    }
  })

  if (!course) {
    return res.send("course not found!")
  }

  return res.render("course", {course})

})


server.use(function(req, res) {
  res.status(404).render("not-found")
})

server.listen(5000, function(){
  console.log('Server is running!')
})