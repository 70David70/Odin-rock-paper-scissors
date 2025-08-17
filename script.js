


const gameStats = {
    playerScore: 5,
    cpuScore: 5,
    roundChoices: null
}

function main() {

}

function getHumanChoice() {
    let cards = document.querySelector("#player-cards")
    cards.addEventListener("click", (e)=> {
        console.log(e.target.id)
    })
}

function getComputerChoice() {

}





















// function getHumanChoice() {
//     let humanChoice = prompt("What's your play: rock, paper, scissors");
//     if(["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
//         return humanChoice.toLowerCase();
//     }
//     else return getHumanChoice();
// }

// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     let computerChoice = choices[Math.floor(Math.random() * 3)];
//     return computerChoice;
// }

// let humanScore = 0;
// let computerScore = 0;

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const human = getHumanChoice()
//         const computer = getComputerChoice()
//         playRound(human, computer);


//         function playRound(humanChoice, computerChoice) {

//             if (humanChoice === "rock" && computerChoice === "paper") {
//                 console.log("You lose! paper beats rock");
//                 computerScore++;
//             }
//             else if (humanChoice === "rock" && computerChoice === "scissors") {
//                 console.log("You win! rock beats scissors");
//                 humanScore++;
//             }

//             else if (humanChoice === "paper" && computerChoice === "rock") {
//                 console.log("You win! paper beats rock");
//                 humanScore++;
//             }
//             else if (humanChoice === "paper" && computerChoice === "scissors") {
//                 console.log("You lose! scissors beats paper");
//                 computerScore++;
//             }

//             else if (humanChoice === "scissors" && computerChoice === "paper") {
//                 console.log("You win! scissors beats paper");
//                 humanScore++;
//             }
//             else if (humanChoice === "scissors" && computerChoice === "rock") {
//                 console.log("You lose! rock beats scissors");
//                 computerScore++;
//             }

//             else console.log("That's a draw you both chose " + humanChoice)

//         }
//         console.log("Human score: " + humanScore, "Computer score: " + computerScore)

//     }
// }
// playGame()
