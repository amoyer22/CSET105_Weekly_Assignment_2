function playerChoice(choice){
    let playerScoreDisplay = document.getElementById("playerScoreDisplay")
    let computerScoreDisplay = document.getElementById("computerScoreDisplay")
    let tiesScoreDisplay = document.getElementById("tiesScoreDisplay")
    let computerRNG = Math.floor(Math.random() * 3) + 1;

    if(choice === 'rock'){
        document.getElementById("playerChoice").innerHTML = "Rock 🪨"
    }
    else if(choice === 'paper'){
        document.getElementById("playerChoice").innerHTML = "Paper 📄"
    }
    else if(choice === 'scissors'){
        document.getElementById("playerChoice").innerHTML = "Scissors ✂️"
    }


    if(computerRNG === 1){
        document.getElementById("computerChoice").innerHTML = "Rock 🪨"
    }
    else if(computerRNG === 2){
        document.getElementById("computerChoice").innerHTML = "Paper 📄"
    }
    else if(computerRNG === 3){
        document.getElementById("computerChoice").innerHTML = "Scissors ✂️"
    }


    if(document.getElementById("playerChoice").innerHTML === document.getElementById("computerChoice").innerHTML){
        document.getElementById("result").innerHTML = "Tie! 🪢"
    }

    else if(document.getElementById("playerChoice").innerHTML === "Rock 🪨" && document.getElementById("computerChoice").innerHTML === "Scissors ✂️"){
        document.getElementById("result").innerHTML = "Player wins! ✅"
    }
    else if(document.getElementById("playerChoice").innerHTML === "Paper 📄" && document.getElementById("computerChoice").innerHTML === "Rock 🪨"){
        document.getElementById("result").innerHTML = "Player wins! ✅"
    }
    else if(document.getElementById("playerChoice").innerHTML === "Scissors ✂️" && document.getElementById("computerChoice").innerHTML === "Paper 📄"){
        document.getElementById("result").innerHTML = "Player wins! ✅"
    }

    else if(document.getElementById("playerChoice").innerHTML === "Rock 🪨" && document.getElementById("computerChoice").innerHTML === "Paper 📄"){
        document.getElementById("result").innerHTML = "Computer wins! 🚫"
    }
    else if(document.getElementById("playerChoice").innerHTML === "Paper 📄" && document.getElementById("computerChoice").innerHTML === "Scissors ✂️"){
        document.getElementById("result").innerHTML = "Computer wins! 🚫"
    }
    else if(document.getElementById("playerChoice").innerHTML === "Scissors ✂️" && document.getElementById("computerChoice").innerHTML === "Rock 🪨"){
        document.getElementById("result").innerHTML = "Computer wins! 🚫"
    }
}