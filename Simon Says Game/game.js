var gamePattern = [];
var randomNumber;
var randomChosenColor;
var audio;
var userClickedPattern = [];


var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").click( function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    nextSequence();
});


function nextSequence() {

    randomNumber = Math.floor(4 * Math.random());
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();


    
}

    nextSequence();
