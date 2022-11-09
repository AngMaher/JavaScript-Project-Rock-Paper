let gameArea = document.getElementById('game-section');
let buttons = document.getElementsByClassName('btn-choice');
const computerImage = document.getElementById("computer-image")
const playerImage = document.getElementById("player-image");
let resultDisplay = document.getElementById('result-display');
let reset = document.getElementById('reset');

let options = ["rock", "paper", "scissors", "lizard", "spock"];

/* adds event listeners to each button using a for loop*/
for (let button of buttons){
    button.addEventListener('click', function (){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}
/* adds eventlistener to the rest button and creates a function to Reset the Game */
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
            displayComputerWinner();
            incrementComputerScore();
            incrementNumOfGoes();
            console.log("computer wins");
        break;

        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
        case "lizardlizard":
        case "spockspock":
            displayDraw();
            incrementNumOfGoes();
            console.log("its a draw");
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
/**
 * Increments the number of goes until it hits the end of the game
 */
function incrementNumOfGoes(){
    let oldScore = parseInt(document.getElementById('num-of-goes').innerText);
    if (oldScore < 14){
         document.getElementById('num-of-goes').innerText = ++oldScore;
    } else if (oldScore === 14){
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

/**
 * This function take the scores of both the player and computer after 15 goes
 * checks who has the most and declares an overall winner.
 */
function checkOverallWinner(){

    let playerOverallScore = parseInt(document.getElementById('player-result').innerText);
    let computerOverallScore = parseInt(document.getElementById('computer-result').innerText);
    
    console.log(playerOverallScore);
    console.log(computerOverallScore);
    
    if (playerOverallScore < computerOverallScore){
        computerWinner();
        console.log("computer wins overall");
    } else if (playerOverallScore > computerOverallScore) {
        playerWinner();
        console.log("You are the overall winner");
    } else if (playerOverallScore === computerOverallScore){
        overallDraw();
        console.log("Its a draw");
    } else {   
        console.log("error");
    }
}

function computerWinner(){
    let computerWinner = document.getElementById('game-section');
    computerWinner.innerHTML=`<h1>The comptuer wins, better luck next time</h1><br><div><img src="assets/images/sadstartrek.jpeg" alt="emoji of sad La Forge" height = "40%" width = "40%">
                                </div><br><button id="resetgame" type="reset">Reset</button>`;
    computerWinner.style.backgroundColor = "rgb(94, 214, 110, 0.8)";
    computerWinner.style.fontSize = "150%";
    computerWinner.style.textAlign = "center";

    resetgame.style.backgroundColor = "rgb(28, 42, 54)";
    resetgame.style.color = "antiquewhite";
    resetgame.style.height = "40px";
    resetgame.style.width = "60px";
    
    resetgame.addEventListener('click', function(){
        window.location.reload();
    });
}

function playerWinner(){
    let playerWinner = document.getElementById('game-section');
    playerWinner.innerHTML=`<h1>You Won!! Congrats</h1><br><div><img src="assets/images/happystartrek.png" alt="emoji of spock happy" height = "40%" width = "40%">
                                </div><br><button id="resetgame" type="reset">Reset</button>`;
    playerWinner.style.backgroundColor = "rgb(94, 214, 110, 0.8)";
    playerWinner.style.fontSize = "150%";
    playerWinner.style.textAlign = "center";

    resetgame.style.backgroundColor = "rgb(28, 42, 54)";
    resetgame.style.color = "antiquewhite";
    resetgame.style.height = "40px";
    resetgame.style.width = "60px";

    resetgame.addEventListener('click', function(){
        window.location.reload();
    });

}

function overallDraw(){
    let overallDraw = document.getElementById('game-section');
    overallDraw.innerHTML=`<h1>It's a Draw, press reset for a rematch!</h1><br><div><img src="assets/images/shakinghands.jpg" alt="two emoji characters shanking hands" height = "40%" width = "60%">
                                </div><br><button id="resetgame" type="reset">Reset</button>`;
    overallDraw.style.backgroundColor = "rgb(94, 214, 110, 0.8)";
    overallDraw.style.fontSize = "150%";
    overallDraw.style.textAlign = "center";

    resetgame.style.backgroundColor = "rgb(28, 42, 54)";
    resetgame.style.color = "antiquewhite";
    resetgame.style.height = "40px";
    resetgame.style.width = "60px";

    resetgame.addEventListener('click', function(){
        window.location.reload();
    });
}
}