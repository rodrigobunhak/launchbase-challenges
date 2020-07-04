module.exports = {
  age: function (timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 ||
        month == 0 &&
        today.getDate() <= birthDate.getDate()){
          age = age - 1
        }

    return age
  },
  graduation: function (id) {

    switch (Number(id)) {
      case 1:
        return "Ensino Médio Completo"
      case 2:
        return "Ensino Superior Completo"
      case 3:
        return "Mestrado"
      case 4:
        return "Doutorado"
      default:
        return "Não possui escolaridade informada"
    }
  }
}