// Sum of expense and revenue
const users = [
  {
    name: "Salvio",
    revenue: [115.3, 48.7, 98.3, 14.5],
    expense: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenue: [24.6, 214.3, 45.3],
    expense: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenue: [9.8, 120.3, 340.2, 45.3],
    expense: [450.2, 29.9]
  }
];

function balanceCalc(revenues, expenses) {
  const revenue = numbersSum(revenues)
  const expense = numbersSum(expenses)
  const balance = revenue - expense
  return balance
}

function numbersSum(numbers) {
  let sum = 0
  for(let i=0; i< numbers.length; i++){
    sum += numbers[i]
  }
  return sum
}

for (let i = 0; i < users.length; i++) {
  const balance = balanceCalc(users[i].revenue, users[i].expense)
  const positiveBalance = balance >= 0
  if (positiveBalance){
    console.log(`${users[i].name} has POSITIVE balance of ${balance.toFixed(2)}`)
  } else {
    console.log(`${users[i].name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
  }
}

