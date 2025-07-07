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
        return humanChoice;
    }
    else getHumanChoice();
}

function getComputerChoice() {
    let number = (Math.random() * 10);
    let computerChoice = number => {
        if (number <= 3.33) return "rock";
        else if (number > 3.33 && number <= 6.66) return "scissors";
        else return "paper";
    };
    return computerChoice(number);
}
