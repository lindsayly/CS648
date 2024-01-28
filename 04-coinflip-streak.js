var coinFlip;
do {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if(coinFlip) {
        console.log("Tails");
    } else {
        console.log("Heads");
    }
} while (!coinFlip);