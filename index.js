//Retirement calc
const name = 'Mario'
const gender = 'M'
const age = 80
const contribution = 34

if (gender == 'M') {
  if (contribution >= 35 && (contribution + age) >= 95) {
    console.log(`${name}, you are OK to retire!`)
  } else {
    console.log(`${name}, you are not OK to retire!`)
  }
} else { // gender == 'F'
  if (contribution >= 30 && (contribution + age) >= 85) {
    console.log(`${name}, you are OK to retire!`)
  } else {
    console.log(`${name}, you are not OK to retire!`)
  }
} 