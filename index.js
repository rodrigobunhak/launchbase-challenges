//IMC calc
const name = 'Carlos'
const weight = 84
const height = 1.88

const imc = weight / (height * height)

if( imc >= 30){
  console.log(`${name}, you are above the ideal weight.`)
} else {
  console.log(`${name}, you aren't above the ideal weight.`)
}