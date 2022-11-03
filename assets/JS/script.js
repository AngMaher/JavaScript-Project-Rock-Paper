let gameArea = document.getElementById('game-section');
let buttons = document.getElementsByClassName('btn-choice');
const computerImage = document.getElementById("computer-image")
const playerImage = document.getElementById("player-image");
let resultDisplay = document.getElementById('result-display');
let reset = document.getElementById('reset');

let options = ["rock", "paper", "scissors", "lizard", "spock"];

for (let button of buttons){
    button.addEventListener('click', function (){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}
/**
 * Reset Game 
 */
reset.addEventListener('click', function() {
    window.location.reload();
});

/** 
 * This function runs the game, displays the images of the players choice 
 * and a random image for computer choice. It then calls a funtion to check results.
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${options[playerChoice]}.jpg`;
    playerImage.alt = options[playerChoice];
    playerImage.className = 'circle';

    let computerChoice = Math.floor(Math.random()*5);

    computerImage.src = `assets/images/${options[computerChoice]}.jpg`;
    computerImage.alt = options[computerChoice];
    computerImage.className = 'circle';
    let player = options[playerChoice];
    let computer = options[computerChoice];

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
            displayPlayerWinner();
            incrementPlayerScore();
            incrementNumOfGoes();
            /*console.log("You Win");*/
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
            displayComputerWinner();
            incrementComputerScore();
            incrementNumOfGoes();
        break;

        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
        case "lizardlizard":
        case "spockspock":
            displayDraw();
            incrementNumOfGoes();
            /*console.log("its a draw");*/
        break;

        default:
            console.log("error");
}
/**
 * If the player won this function displays text "You Won"
 */
function displayPlayerWinner(){
    let winner = document.getElementById("result-display");
    winner.textContent = "You Win!!";
}
/**
 * If the computer won this function dsiplays text "Computer Wins"
 */
function displayComputerWinner(){
    let winner = document.getElementById("result-display");
    winner.textContent = "CPU Wins!!";
    winner.style.margin=0;

}
/**
 * If it is a draw A Draw is displayed
 */
function displayDraw(){
    let winner = document.getElementById("result-display");
    winner.textContent = "A Draw!!";
}

/**
 * Increments players score by 1 each time they win
 */
function incrementPlayerScore(){
    let oldScore = parseInt(document.getElementById('player-result').innerText);
    document.getElementById('player-result').innerText = ++oldScore;
}

function incrementNumOfGoes(){
    let oldScore = parseInt(document.getElementById('num-of-goes').innerText);
    if (oldScore < 15){
         document.getElementById('num-of-goes').innerText = ++oldScore;
    } else if (oldScore === 15){
        checkOverallWinner();
    } else{
        console.log("error counting up");
    }

}
/**
 * Increments computers score each time it wins
 */
function incrementComputerScore(){
    let oldScore = parseInt(document.getElementById('computer-result').innerText);
    document.getElementById('computer-result').innerText = ++oldScore;
}


function checkOverallWinner(){
    let playerOverallScore = parseInt(document.getElementById('player-result').innerText);
    let computerOverallScore = parseInt(document.getElementById('computer-result').innerText);
    
    console.log(playerOverallScore);
    console.log(computerOverallScore);
    
    if (playerOverallScore < computerOverallScore){
        console.log("computer wins overall");
    } else if (playerOverallScore > computerOverallScore) {
        console.log("You are the overall winner");
    } else if (playerOverallScore === computerOverallScore){
        console.log("Its a draw");
    } else {   console.log("error");
    }

}

}