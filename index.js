// Arrays and objects
const programmer = {
  name: 'João',
  age: 25,
  technologies: [
    { name: 'C++', specialty: 'Desktop' },
    { name: 'Python', specialty: 'Data Science' },
    { name: 'JavaScript', specialty: 'Web/Mobile' }
  ]
}
console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.technologies[0].name} com especialidade em ${programmer.technologies[0].specialty}`)
