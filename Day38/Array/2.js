let randomNum = [];
for (var i = 1; i <= 10; i++) {
    num = Math.floor(Math.random() * 900) + 100;
    randomNum.push(num);
}
console.log("Sort: " + randomNum.sort());
console.log("2nd maximum: " + randomNum[randomNum.length - 2] + "\n2nd minimum: " + randomNum[1]);