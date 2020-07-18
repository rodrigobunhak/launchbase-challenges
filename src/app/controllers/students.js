const { } = require('../../lib/utils')

module.exports = {
  index(req, res){

    return res.render('students/index')

  },
  create(req, res){

    return res.render('students/create')

  },
  post(req, res){

    const keys = Object.keys(req.body)
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    return res.redirect("/students")

  },
  show(req, res){

    return

  },
  edit(req, res){

    return

  },
  put(req, res){

    const keys = Object.keys(req.body)
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    return

  },
  delete(req, res){

    return

  }
}