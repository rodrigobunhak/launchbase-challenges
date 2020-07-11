const fs = require('fs')
const data = require("../data.json")
const { age, graduation, date, tipo_aula } = require('../utils')

exports.create = function(req, res) {
  return res.render('members/create')
}

exports.index = function(req, res) {

  for(const student of data.students) {
    student.tipo_aula = tipo_aula(student.tipo_aula)
    student.acompanhamentos = student.acompanhamentos.toString().split(",")
  }

  return res.render('students/index', { students: data.students })

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
  const id = Number(data.students.length + 1)

  data.students.push({
    id,
    avatar_url,
    name,
    birth,
    escolaridade,
    tipo_aula,
    acompanhamentos,
    created_at
  })

  //* write on file data.json 
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

    return res.redirect("/students")
  })
}

exports.show = function (req, res) {

  const { id } = req.params

  const foundStudent = data.students.find(function(student){
    return student.id == id
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    age: age(foundStudent.birth),
    escolaridade: graduation(foundStudent.escolaridade),
    acompanhamentos: foundStudent.acompanhamentos.toString().split(","),
    tipo_aula: tipo_aula(foundStudent.tipo_aula),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundStudent.created_at),
  }

  return res.render("students/show", { student })
}

exports.edit = function (req, res) {

  const { id } = req.params

  const foundStudent = data.students.find(function(student){
    return student.id == id
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth)
  }

  return res.render("students/edit", { student })
}

exports.put = function (req, res) {
  
  const { id } = req.body

  let index = 0

  const foundStudent = data.students.find(function(student, foundIndex){
    if (student.id == id) {
      index = foundIndex
      return true
    }
    return student.id == id
  })

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file errow!")

    return res.redirect(`/students/${id}`)
  })
}

exports.delete = function (req, res) {

  const { id } = req.body

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id 
  })

  data.students = filteredStudents

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect("/students")
  })
}