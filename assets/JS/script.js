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
/** 
 * This function runs the game, displays the images of the players choice 
 * and a random image for computer choice. It then calls a funtion to check results.
 */
function playGame(playerChoice){

    playerImage.src=`assets/images/${options[playerChoice]}.jpg`;
    playerImage.alt=options[playerChoice];

    let computerChoice = Math.floor(Math.random()*5);

    computerImage.src=`assets/images/${options[computerChoice]}.jpg`;
    computerImage.alt=options[computerChoice];
    let player=options[playerChoice];
    let computer=options[computerChoice];

    checkWinner(player, computer);

    
}
/**
 * This function takes in parameters player and computer, two srtings which are the choices,
 * it then adds both strings are one and compares to work out who won.
 */
function checkWinner(player,computer) {
    
    let choiceString = player+computer;
    
    switch(choiceString){
        case "scissorspaper":
        case "scissorslizard":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "paperspock":
        case "spockrock":
        case "spockscissors":
        case "rockscissors":
        case "lizardpaper":
        	/*incrementPlayerScore(choiceString);
            displayWinner():*/
            console.log("You Win");
        break;
    
    	case "paperscissors":
        case "lizardscissors":
        case "rockpaper":
        case "lizardrock":
        case "spocklizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsspock":
        case "scissorsrock":
        case "paperlizard":
           /* incrementComputerScore(choiceString);
            displayWinner()*/
            console.log("Computer wins");
        break;

        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
        case "lizardlizard":
        case "spockspock":
            console.log("its a draw");
        break;

        default:
            console.log("error");
}
/*
function displayWinner(winner){
    console.log(winner);
}

function incrementComputerScore(){
    console.log("3");
}

function incrementPlayerScore(choiceString){
    console.log(choiceString, "you win");
}

function gaameCounter(){

}*/

}