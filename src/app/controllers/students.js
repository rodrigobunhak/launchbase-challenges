const { age, grade, date } = require('../../lib/utils');
const Student = require('../models/Students');

module.exports = {
  index(req, res){

    Student.all(function(students){

      return res.render('students/index', {students});
    });

  },
  create(req, res){

    return res.render('students/create');

  },
  post(req, res){

    const keys = Object.keys(req.body)
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    Student.create(req.body, function(instructor) {
      return res.redirect(`/students/${instructor.id}`)
    })

  },
  show(req, res){

    Student.find(req.params.id, function(student) {
      if(!student) return res.send('Student not found!');

      student.birth_date = age(student.birth_date)
      student.grade = grade(student.grade)
      student.birth = date(student.birth_date).birthDay
    
      return res.render("students/show", { student })
    })

  },
  edit(req, res){

    Student.find(req.params.id, function(student) {

      if(!student) return res.send('Student not found!');

      student.birth_date = date(student.birth_date).iso

      return res.render('students/edit', {student});

    })

  },
  put(req, res){

    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!');
      }
    }

    Student.update(req.body, function(){
      return res.redirect(`/students/${req.body.id}`);
    })

  },
  delete(req, res){

    Student.delete(req.body.id, function() {
      return res.redirect(`/students/`);
    })

  }
}