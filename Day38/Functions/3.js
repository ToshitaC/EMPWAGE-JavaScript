var prompt = require('prompt-sync')();
function checkPrime(number) {
    let flag = true;
    if (number <= 1) {
        flag = false;
    }
    else if (number == 2) {
        flag = true;
    }
    else if (number % 2 == 0) {
        flag = false;
    }

    for (var i = 3; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function getPalindrome(number) {
    let num = number;
    let reversenum = 0;
    do {
        let r = num % 10;
        reversenum = reversenum * 10 + r;
        num = Math.floor(num / 10);
    } while (num != 0)

    if (number == reversenum) {
        return reversenum;
    }
    else {
        return 0;
    }
}

let number = parseInt(prompt("Enter number: "));

if (checkPrime(number)) {
    console.log(number + " is a prime number");
    if (getPalindrome(number) != 0) {
        console.log(number + " is a palindrome");
        let palindrome = getPalindrome(number);
        if (checkPrime(palindrome))
            console.log("Palindrome of " + number + " is prime");
        else
            console.log("Palindrome of " + number + " is not prime");
    }
    else
        console.log(number + " is not a palindrome");
}
else
    console.log(number + " is not a prime number");