let gameArea = document.getElementById('game-area');
let heading = document.createElement("h2");
heading.innerHTML = "Please click your choice below:";
gameArea.append(heading);

let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];



for (let i = 0; i < options.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = options[i];
    button.addEventListener('click', makeChoice);
    gameArea.append(button);
}

function makeChoice() {
    console.log("hello");
}
