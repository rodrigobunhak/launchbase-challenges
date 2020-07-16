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
  date: function (timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year, 
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
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
  },
  tipo_aula: function (type) {
    
    switch (type) {
      case "pre":
        return "Presencial"
      case "dis":
        return "À distância"
      default:
        return "Não possui dado informado"
    }
  },
  grade: function (type) {
    
    switch (type) {
      case "5ef":
        return "5º ano do Ensino Fundamental"
      case "6ef":
        return "6º ano do Ensino Fundamental"
      case "7ef":
        return "7º ano do Ensino Fundamental"
      case "8ef":
        return "8º ano do Ensino Fundamental"
      case "9ef":
        return "9º ano do Ensino Fundamental"
      case "1em":
        return "1º ano do Ensino Médio"
      case "2em":
        return "2º ano do Ensino Médio"
      case "3em":
        return "3º ano do Ensino Médio"
      default:
        return "Não possui dado informado"
    }
  }
}