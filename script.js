


const gameStats = {
    playerScore: 5,
    cpuScore: 5,
    roundChoices: null
}

function main() {
        let humanCards = document.querySelector("#player-cards")
        let humanChoice;
        setScore()
        humanCards.addEventListener("click", (e)=> {
            humanChoice = e.target.id
            let cpuChoice = getComputerChoice();
            gameStats.roundChoices = {human: humanChoice, cpu: cpuChoice}
            updateArena()

            setTimeout(()=> {
                // to do --add a function that takes roundWinner() and updates the hud
            }, 1000)
        })

}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function updateArena() {
    let arena = document.querySelector("#arena")
    arena.innerHTML = `
        <img id="chosenCpuCard" src="/resources/rps-${gameStats.roundChoices.cpu}.png">
        <img id="chosenHumanCard" src="/resources/rps-${gameStats.roundChoices.human}.png">
    `;
}

function setScore() {
    let playerHearts = document.querySelector("#playerHearts")
    let cpuHearts = document.querySelector("#cpuHearts")
    for(let i = 1; i <= gameStats.playerScore; i++) {
        playerHearts.insertAdjacentHTML("beforeend", `<img id="playerHeart-${i}" src="/resources/heart.png">`);
    }
    for(let i = 1; i <= gameStats.cpuScore; i++) {
        cpuHearts.insertAdjacentHTML("beforeend", `<img id="cpuHeart-${i}" src="/resources/heart.png">`);
    }
}

function roundWinner() {
    const {human, cpu} = gameStats.roundChoices

    if (human === cpu) return "draw";
    
    if (human === "rock" && cpu === "scissors" ||
        human === "paper" && cpu === "rock" ||
        human === "scissors" && cpu == "paper"
    )
    return "player";
    else return "cpu";

}

/*
    TODOs:
        Create a function that takes roundWinner() print a flash then removes a heart from the loser
            if the loser is at 1 heart before removing a heart:
                activate a function that shows GAME OVER screen
*/



main()


















// function getHumanChoice() {
//     let humanChoice = prompt("What's your play: rock, paper, scissors");
//     if(["rock", "paper", "scissors"].includes(humanChoice.toLowerCase())) {
//         return humanChoice.toLowerCase();
//     }
//     else return getHumanChoice();
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
