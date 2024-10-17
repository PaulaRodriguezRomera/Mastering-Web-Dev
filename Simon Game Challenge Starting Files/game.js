var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#green").on("click", function(){
    $("#green").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
    var audio = new Audio('/Simon Game Challenge Starting Files/sounds/green.mp3');
    audio.play();
    });

$(".btn").on("click", function(){
    var userChosenColour = []; 
}); 





