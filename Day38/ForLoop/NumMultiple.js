var prompt = require('prompt-sync')();
let input = prompt("Enter the value of n(input) to print table of powers of 2: ");
for (let i = 0; i <= input; i++) {
    let result = Math.pow(2, i);
    console.log("2^" + i + " =", result);
}