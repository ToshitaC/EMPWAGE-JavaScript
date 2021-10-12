let randomNum = [];
for (var i = 1; i <= 10; i++) {
    randomNum[i] = Math.floor(Math.random() * 1000);
    if (randomNum[i] > 99) {
        console.log(randomNum[i]);
    }
    else
        i = i - 1;
}

//let min = randomNum[0]
//let max = randomNum[0]
let temp;
for (let i = 1; i < randomNum.length; i++) {
    for (let j = i + 1; j < randomNum.length; j++) {
        if (randomNum[i] > randomNum[j]) {
            temp = randomNum[i];
            randomNum[i] = randomNum[j];
            randomNum[j] = temp;
        }
    }
    console.log("Array: " + randomNum[i]);
}

console.log("2nd maximum: " + randomNum[randomNum.length - 2] + "\n2nd minimum: " + randomNum[2]);