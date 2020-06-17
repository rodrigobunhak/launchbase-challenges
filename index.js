// Search by technologie
const users = [
  { name: 'Carlos', technologies: ['HTML', 'CSS'] },
  { name: 'José', technologies: ['Javascript', 'CSS'] },
  { name: 'Tuane', technologies: ['C#', 'Java'] },
  { name: 'Camila', technologies: ['Node.js', 'React', 'CSS'] }
]

function checkUserUseCSS(user) {
  for (let i = 0; i < user.technologies.length; i++) {
    if (user.technologies[i] === 'CSS') {
      return true
    }
  }
  return false
}

for (let i = 0; i < users.length; i++) {
  const userWorkWithCSS = checkUserUseCSS(users[i])

  if (userWorkWithCSS) {
    console.log(`User ${users[i].name} work with CSS.`)
  }
}