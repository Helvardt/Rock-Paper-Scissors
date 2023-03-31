let playerChoice = prompt("Rock, Paper or Scissors?")

validInput(playerChoice)

function validInput(playerChoice) {
    if (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors" ) {
        prompt("Please enter a valid input")
    }
}



function computerPlay() {
    let computerChoice = ["Rock", "Paper", "Scissors"]; // An array of three strings
    let num = Math.floor(Math.random() * computerChoice.length); // Generate a random index between 0 and 2
    return computerChoice[num];
  }

let computerSelection = computerPlay();

playRound(playerChoice, computerSelection);

console.log(computerSelection)

let playerScore = 0

let pcScore = 0

function playRound(playerChoice, computerSelection) {
    if(playerChoice === computerSelection) {
        alert("It's a draw!");
    }
    else if (playerChoice === "Rock" && computerSelection === "Paper") {
        alert("You lose! Paper beats Rock!");
        pcScore++
    }
    else if (playerChoice === "Rock" && computerSelection === "Scissors") {
        alert("You win!");
        playerScore++
    }
    else if (playerChoice === "Scissors" && computerSelection === "Rock") {
        alert("you lose");
        pcScore++
    }
    else if (playerChoice === "Scissors" && computerSelection === "Paper") {
        alert("You Win");
        playerScore++
    }
    else if (playerChoice === "Paper" && computerSelection === "Rock" ) {
        alert("You Win");
        playerScore++
    }
    else if (playerChoice === "Paper" && computerSelection === "Scissors") {
        alert("You lose");
        pcScore++
    }
}

for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    let computerSelection = computerPlay();
    console.log(`Round ${i+1} computer choice is ${computerSelection} and player choice is ${playerChoice}`)
  }



totalWinner(playerScore, pcScore)

function totalWinner(playerScore, pcScore) {
    if (playerScore > pcScore) {
        alert("You win with "+playerScore+ " points!")
    }
    else if (playerScore < pcScore) {
        alert("You lose! The PC has "+pcScore+ " points!")
    }
    else if (playerScore === pcScore) {
        alert("Wow! That's a draw!")
    }
}