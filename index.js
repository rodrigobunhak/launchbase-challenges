// Users and technologies
const users = [
  { name: 'Carlos', technologies: ['HTML', 'CSS'] },
  { name: 'José', technologies: ['Javascript', 'CSS'] },
  { name: 'Tuane', technologies: ['C#', 'Java'] },
  { name: 'Camila', technologies: ['Node.js', 'React'] }
]

for(i = 0; i < users.length; i++) {
  console.log(`${users[i].name} trabalha com ${users[i].technologies}`)
}