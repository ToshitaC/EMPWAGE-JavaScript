const TAIL = 0;
const HEAD = 1;
let headCount = 0;
let tailCount = 0;
while (headCount != 11 && tailCount != 11) {
    let tossCoin = Math.floor(Math.random() * 10) % 2;
    switch (tossCoin) {
        case HEAD: headCount++;
            break;
        case TAIL: tailCount++;
            break;
    }
}
console.log("Head Count = " + headCount);
console.log("Tail Count = " + tailCount);