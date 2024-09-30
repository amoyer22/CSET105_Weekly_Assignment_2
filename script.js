function gameStart(){
    let computerRNG = Math.floor(Math.random() * 3) + 1;

    if(computerRNG === 1){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Rock"
    }
    if(computerRNG === 2){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Paper"
    }
    if(computerRNG === 3){
        document.getElementById("computerChoice").innerHTML = "Computer's Choice: Scissors"
    }
}