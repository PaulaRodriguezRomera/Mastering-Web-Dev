//Set a variable to get random numbers

var randomNumber1 = Math.floor(Math.random() * 6) +1; 

//add variable to image to get random images from 1 to 6

var randomImageSource = "images/dice" + randomNumber1 + ".png";

//add the new attribute to image 1

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//same for image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//condition to change the h1 depending on who wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😀 Player 1 wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🥳 Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "🤐 Draw!";
}