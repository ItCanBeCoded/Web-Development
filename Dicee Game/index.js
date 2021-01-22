window.onload = function rollTheDice(){
    var diceResult;
    var diceResult2;
    var whichDie = "images/diceX.png";
    var whichDie2 = "images/diceY.png";
    var dieChosen;
    var dieChosen2;
    var winner1 = "Player 1 Wins";
    var winner2 = "Player 2 Wins";
    var tie = "It's a Tie!";

    diceResult = Math.ceil(6 * Math.random());
    diceResult2 = Math.ceil(6 * Math.random());

    dieChosen = whichDie.replace("X", diceResult);
    dieChosen2 = whichDie2.replace("Y", diceResult2);
    //console.log(dieChosen); test successful for replacement



    document.querySelector(".img1").setAttribute("src", dieChosen);
    document.querySelector(".img2").setAttribute("src", dieChosen2);

    if (diceResult > diceResult2){
        document.querySelector("h1").innerHTML = winner1;
    }
    if (diceResult < diceResult2){
        document.querySelector("h1").innerHTML = winner2;
    }  
    if (diceResult === diceResult2){
        document.querySelector("h1").innerHTML = tie;
    }


}

