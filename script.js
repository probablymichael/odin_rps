// declaring

const announceDiv = document.querySelector("#div-announce")
const scoreDiv = document.querySelector("#div-score")
const displayWinsLossesText = document.querySelector(".round-msg")

const wins_player = document.querySelector('.player-wins')
const wins_computer = document.querySelector('.computer-wins')

const div = document.querySelector("#btn-container")
const btn_r = document.querySelector(".btn-r")
const btn_p = document.querySelector(".btn-p")
const btn_s = document.querySelector(".btn-s")
const res_btn = document.querySelector(".res-btn")

btn_r.addEventListener('click', () => {
    playRound('rock');
})
btn_p.addEventListener('click', () => {
    playRound('paper');
})
btn_s.addEventListener('click', () => {
    playRound('scissors');
})


// random computer option
let randomComputerSelection;
let computerChoice;

function getComputerChoice(){
    const computerOptions = ['rock', 'paper', 'scissors'];
    randomComputerSelection = Math.floor(Math.random() * computerOptions.length);
    computerChoice = randomComputerSelection;
    return computerOptions[computerChoice];
}
// display wins func
function displayWins(){
    if (playerWins <= 5 && computerWins <= 5){
        wins_player.textContent = playerWins;
        wins_computer.textContent = computerWins;
    }
    if (playerWins === 5){
        announceDiv.textContent = 'You\'ve won!';
        btn_r.disabled = true;
        btn_p.disabled = true;
        btn_s.disabled = true;

    } else if (computerWins === 5){
        announceDiv.textContent = 'You\'ve lost..';
        btn_r.disabled = true;
        btn_p.disabled = true;
        btn_s.disabled = true;
    }
}

// playRound function related
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
const gameTie = `That\'s a tie!`;

function playRound(playerSelection, computerSelection){

    wins_player.textContent = playerWins;
    wins_computer.textContent = computerWins;
    computerSelection = getComputerChoice();

    if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper'){
        displayWinsLossesText.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        Indication = true;
        playerWins++;

    } else if (computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'paper'){
        displayWinsLossesText.textContent =  `You lost! ${computerSelection} beats ${playerSelection}`;
        Indication = false;
        computerWins++;

    } else if (playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors'){
        displayWinsLossesText.textContent =  gameTie;
    }

    displayWins();

}

// reset btn
res_btn.addEventListener('click', () => {
    displayWinsLossesText.textContent = ''
    announceDiv.textContent = ''
    playerWins = 0;
    computerWins = 0;
    wins_player.textContent = playerWins
    wins_computer.textContent = computerWins
    btn_r.disabled = false;
    btn_p.disabled = false;
    btn_s.disabled = false;

})