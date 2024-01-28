var coinFlip;
for (var i = 0; i < 10; i++) {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip) {
        console.log("Tails");
    } else {
        console.log("Heads");
    }
}