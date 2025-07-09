/*
    1- GET INPUT
    2- check if the input a string
        if not ask again
    3- check if the input one of the choises
        if not ask again
    4- generate a random play
    5- compare the player and the bot's play and decide who wins
    6- if they have the same play ask for input again
*/

function getHumanChoice() {
    let humanChoice = prompt("What's your play: rock, paper, scissors");
    if(["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
        return humanChoice.toLowerCase();
    }
    else return getHumanChoice();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice()
        const computer = getComputerChoice()
        playRound(human, computer);


        function playRound(humanChoice, computerChoice) {

            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You lose! paper beats rock");
                computerScore++;
            }
            else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("You win! rock beats scissors");
                humanScore++;
            }

            else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("You win! paper beats rock");
                humanScore++;
            }
            else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You lose! scissors beats paper");
                computerScore++;
            }

            else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win! scissors beats paper");
                humanScore++;
            }
            else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose! rock beats scissors");
                computerScore++;
            }

            else console.log("That's a draw you both chose " + humanChoice)

        }
        console.log("Human score: " + humanScore, "Computer score: " + computerScore)

    }
}
playGame()
