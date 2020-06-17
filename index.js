
const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction(transaction){
  if(transaction.type === 'credit') {
    user.transactions.push(transaction)
    user.balance += transaction.value
  } else if (transaction.type === 'debit') {
    user.transactions.push(transaction)
    user.balance -= transaction.value
  } else {
    console.log(`Invalid type transaction! (type: ${transaction.type})`)
  }
}

function getHigherTransactionByType(type){
  const higherTransaction = { type: '', value: 0 }

  for(const transaction of user.transactions) {
    if(transaction.type === type && transaction.value > higherTransaction.value) {
      higherTransaction.type = transaction.type
      higherTransaction.value = transaction.value
    }
  }
  console.table(higherTransaction)
}

function getAverageTransactionValue(){
  let transactionTotal = 0
  
  for(const transaction of user.transactions){
    transactionTotal += transaction.value
  }

  const averageTransaction = transactionTotal / user.transactions.length
  console.log(averageTransaction)
}

function getTransactionsCount(){
  const amount = { credit: 0, debit: 0}
  
  for(const transaction of user.transactions){
    if(transaction.type === 'credit') {
      amount.credit ++
    } else {
      amount.debit ++
    }
  }
  console.log(amount)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount();