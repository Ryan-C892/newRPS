// Create a function that randomly returns a rock, paper, or scissors //
// Create variables for user and computer while giving the user choices //

// Computer //
function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// Score //
let userScore = 0;
let computerScore = 0;
let winner = document.getElementById("win");
// button elements are now a node list //
const buttons = document.querySelectorAll('button');

// Player //
let playCount;
function checkPlayCount () {
    if (playCount >= 5 && computerScore >= 5) {
        alert("Computer wins!");
        winner.textContent = "Computer wins!";
    } else if (playCount >= 5 && userScore >= 5) {
        alert("Player wins!");
        winner.textContent = "Player wins!";
    } else if (playCount >= 5 && computerScore >= 5 && userScore >= 5) {
        alert("Draw!");
        winner.textContent = "Draw!";
        // Reset Score to Zero //
        setTimeout(window.location.reload.bind(window.location), 3000);
    }
}

// use forEach() to iterate through every button and add an event listener to each click event //
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        computerSelect = computerPlay();
        userSelect = e.target.id;
        let playerScore = document.getElementById("userScore");
        let robotScore = document.getElementById("computerScore");
        const result = playRound(userSelect, computerSelect);
        // Score Count //
        if (result == 1) {
            userScore++;
            playerScore.textContent = userScore;
        } else if (result == 0) {
            computerScore++;
            robotScore.textContent = computerScore;
        } else if (result == 2) {
            winner.textContent = "Draw!";
        }
        // Round Count //
        if (playCount == null) {
            playCount = 0;
            playCount += 1;
        } else {
            playCount += 1;
        }
        checkPlayCount()
    });
});
// Write a function that plays one round of rock, paper, scissors //
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let playerWin = 1;
    let computerWin = 0;
    let tie = 2;
    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!");
        winner.textContent = "You lose! Paper beats Rock!";
        return computerWin;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        winner.textContent = "You lose! Scissors beats Paper!";
        return computerWin;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors!");
        winner.textContent = "You lose! Rock beats Scissors!";
        return computerWin;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors!");
        winner.textContent = "You win! Rock beats Scissors!";
        return playerWin;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock!");
        winner.textContent = "You win! Paper beats Rock!";
        return playerWin;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper!");
        winner.textContent = "You win! Scissors beats Paper!";
        return playerWin;
    } else if (playerSelection === computerSelection) {
        console.log("Draw! Try again.");
        winner.textContent ="Draw! Try again.";
        return tie;
    }
}
// Reset //
function clearGame() {
    window.location.reload();
}