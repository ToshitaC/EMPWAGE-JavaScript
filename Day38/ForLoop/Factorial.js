const prompt = require('prompt-sync')();
let num = prompt('Enter a number to find factorial: ');
let fact = 1;
for (var i = 1; i <= parseInt(num); i++) {
    fact = fact * i;
}
console.log("Factorial of " + num + " = " + fact);