//node index.js scissors
const process = require('process')

const validOptions = ['rock', 'paper', 'scissors'];
const arguements = process.argv.slice(2);
const userChoice = arguements[0];
const computerChoice = validOptions[Math.floor(Math.random() * validOptions.length)]



function determineWinner(playerInput, computerInput) {
    //Rock beats scissors
    //Scissors beats paper
    //Paper beats rock

    if (playerInput === computerInput) {
        return "It's a tie!";
    }

    if (
        (playerInput === 'scissors' && computerInput === 'paper') ||
        (playerInput === 'rock' && computerInput === 'scissors') || 
        (playerInput === 'paper' && computerInput === 'rock')
    ) {
        return "You win!"
    }

    return "Computer wins!"
}

if (!validOptions.includes(userChoice)) {
  console.log("Usage: node index.js <rock|paper|scissors>");
  return;
}

console.log(`You chose ${userChoice}, the computer chose ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));


