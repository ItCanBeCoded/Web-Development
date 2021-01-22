window.onload = function rollTheDice(){
    var diceResult;
    var diceResult2;
    var whichDie = "images/diceX.png";
    var whichDie2 = "images/diceY.png";
    var dieChosen;
    var dieChosen2;

    diceResult = Math.ceil(6 * Math.random());
    diceResult2 = Math.ceil(6 * Math.random());

    dieChosen = whichDie.replace("X", diceResult);
    dieChosen2 = whichDie2.replace("Y", diceResult2);
    //console.log(dieChosen); test successful for replacement



    document.querySelector(".img1").setAttribute("src", dieChosen);
    document.querySelector(".img2").setAttribute("src", dieChosen2);
      


}

