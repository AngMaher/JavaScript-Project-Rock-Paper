let gameArea = document.getElementById('game-section');
let buttons = document.getElementsByClassName('btn-choice');
const computerImage = document.getElementById("computer-image")
const playerImage = document.getElementById("player-image");
let resultDisplay = document.getElementById('result-display');

let options = ["rock", "paper", "scissors", "lizard", "spock"];

for (let button of buttons){
    button.addEventListener('click', function (){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice){

    playerImage.src=`assets/images/${options[playerChoice]}.jpg`;
    playerImage.alt=options[playerChoice];

    let computerChoice = Math.floor(Math.random()*5);

    computerImage.src=`assets/images/${options[computerChoice]}.jpg`;
    computerImage.alt=options[computerChoice];
    let player=options[playerChoice];
    let computer=options[computerChoice];

    let result = checkWinner(player, computer);

    changeScores(result);
}

function checkWinner(player,computer) {
    result = player+computer;

    
} 

function changeScores(){
    console.log("changeScores function called");
}