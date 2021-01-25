var gamePattern = [];

var buttonColors = ["red","blue","green","yellow"];

var randomChosenColor;

function nextSequence() {
    var randomNumber = Math.floor(4*Math.random());
    randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
}

nextSequence();

