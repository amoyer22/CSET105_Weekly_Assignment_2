function playerChoice(choice){
    let computerRNG = Math.floor(Math.random() * 3) + 1;

    if(choice === 'rock'){
        document.getElementById("playerChoice").innerHTML = "Player's Choice: Rock"
    }
    else if(choice === 'paper'){
        document.getElementById("playerChoice").innerHTML = "Player's Choice: Paper"
    }
    else if(choice === 'scissors'){
        document.getElementById("playerChoice").innerHTML = "Player's Choice: Paper"
    }

    if(computerRNG === 1){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Rock"
    }
    else if(computerRNG === 2){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Paper"
    }
    else if(computerRNG === 3){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Scissors"
    }
}