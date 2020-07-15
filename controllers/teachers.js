const fs = require('fs')
const data = require("../data.json")
const { age, graduation, date, tipo_aula } = require('../utils')

exports.create = function(req, res) {
  return res.render('teachers/create')
}

exports.index = function(req, res) {

  return res.render('teachers/index', { teachers: data.teachers })

}

exports.post = function (req, res) {
  /**
   * * get keys of req.body and valid all fields
   */
  const keys = Object.keys(req.body)
  
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }
  }

  let {avatar_url, birth, name, escolaridade, tipo_aula, acompanhamentos} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  
  let id = 1
  const lastId = data.teachers[data.teachers.length - 1].id
  if (lastId) {
    id = lastId + 1
  }

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    escolaridade,
    tipo_aula,
    acompanhamentos: acompanhamentos.toString().split(","),
    created_at
  })


  //* write on file data.json 
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

    return res.redirect("/teachers")
  })
}

exports.show = function (req, res) {

  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher){
    return teacher.id == id
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    escolaridade: graduation(foundTeacher.escolaridade),
    acompanhamentos: foundTeacher.acompanhamentos.toString().split(","),
    tipo_aula: tipo_aula(foundTeacher.tipo_aula),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
  }

  return res.render("teachers/show", { teacher })
}

exports.edit = function (req, res) {

  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher){
    return teacher.id == id
  })

  if (!foundTeacher) return res.send("Teacher not found!")

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso
  }

  return res.render("teachers/edit", { teacher })
}

exports.put = function (req, res) {
  
  const { id } = req.body

  let index = 0

  const foundTeacher = data.teachers.find(function(teacher, foundIndex){
    if (teacher.id == id) {
      index = foundIndex
      return true
    }
    return teacher.id == id
  })

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
    acompanhamentos: foundTeacher.acompanhamentos.toString().split(",")
  }

  data.teachers[index] = teacher

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file errow!")

    return res.redirect(`/teachers/${id}`)
  })
}

exports.delete = function (req, res) {

  const { id } = req.body

  const filteredTeachers = data.teachers.filter(function(teacher) {
    return teacher.id != id 
  })

  data.teachers = filteredTeachers

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect("/teachers")
  })
}