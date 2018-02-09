// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

git remote add origin https://github.com/mvgregg/hw2.git
git push -u origin master

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]

// Write a function that, when given a username (i.e. brian, ben, or jeff),
// returns the number of KelloggCoin that user has in their KelloggCoin "wallet".

// HINT! You will have to use all the JavaScript programming fundamentals we've
// learned about so far, i.e. variables, arrays, objects, conditionals, loops,
// and functions, to complete this task. There are ways to do this using some
// more advanced array functions, and by all means, experiment with this, but
// get it done using just the basics first.

// It should print out:
// Brian's KelloggCoin balance is 8000
// Ben's KelloggCoin balance is 10350
// Jeff's KelloggCoin balance is 2650

let user = [
  {name:"brian", balance: 0 },
  {name:"ben", balance: 0 },
  {name:"jeff", balance: 0 }
]

let getBalance = function(inputName) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].name === inputName)
      return user[i].balance
  }
}

for (let i = 0; i < blockchain.length; i++) {
  for (let j = 0; j < user.length; j++) {
    if (blockchain[i].toUser === user[j].name) {
      user[j].balance = user[j].balance + blockchain[i].amount
    }
    if (blockchain[i].fromUser === user[j].name) {
      user[j].balance = user[j].balance - blockchain[i].amount
    }
  }
}

console.log("Brian's KelloggCoin balance is " + getBalance("brian"));
console.log("Ben's KelloggCoin balance is " + getBalance("ben"));
console.log("Jeff's KelloggCoin balance is " + getBalance("jeff"));
