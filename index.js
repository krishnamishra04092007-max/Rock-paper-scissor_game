const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore  = 0;

function playgame(playerchoice){

    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result = "It's a Tie!"
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "You win" : "You lose";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You win" : "You lose";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You win" : "You lose";
                break;
        }
    }
    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "You win":
        resultdisplay.classList.add("greentext");
        playerscore++;
        playerscoredisplay.textContent = playerscore;
        break;
        case "You lose":
        resultdisplay.classList.add("redtext");
        computerscore++;
        computerscoredisplay.textContent = computerscore;
        break;

    }
}