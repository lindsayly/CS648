//variable coinFlip and set equal to random number using Math method
//prompt user to select heads or tails and set result to variable "choice"
//check coinFlip < num --> heads, > num --> tails
//if heads and user picked heads, display "The flip was heads and you chose heads...you win!"
//same for tails
//use two Math methods to get a whole number on coin flip

var coinFlip = Math.random();
var choice = prompt("Please enter 'Heads' or 'Tails'.");
coinFlip = Math.round(coinFlip);
if (choice !== "Heads" && choice !== "Tails") {
    choice = prompt("please enter 'Heads' or 'Tails'.");
}
if (choice === "Heads") {
    choice = 0;
}
if (choice === "Tails") {
    choice = 1;
}
if (!coinFlip && !choice) {
    alert("The flip was heads and you chose heads...you win!");
}
if (!coinFlip && choice) {
    alert("The flip was heads but you chose tails...you lose!");
}
if (coinFlip && !choice) {
    alert("The flip was tails but you chose heads...you lose!");
}
if (coinFlip && choice) {
    alert("The flip was tails and you chose tails...you win!");
}