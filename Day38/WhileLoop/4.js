const LOST = 0;
const WON = 1;
let Money = 100;
let wonCount = 0;
let noOfBets = 0;
while (Money > 0 && Money < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    switch (bet) {
        case WON: Money += 1;
            wonCount++;
            break;
        case LOST: Money -= 1;
            break;
    }
    noOfBets++;
}
console.log("Number of times bet won= " + wonCount);
console.log("Total number of bets= " + noOfBets);
console.log("Totat Amount= " + Money);