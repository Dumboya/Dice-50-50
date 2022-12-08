// Dice Left

var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomImage = "images/dice" + randomNumber1 + ".png";

var imgTag1 = document.querySelectorAll("img")[0];

imgTag1.setAttribute("src", randomImage);

// Dice Right

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImage = "images/dice" + randomNumber2 + ".png";

var imgTag2 = document.querySelectorAll("img")[1];

imgTag2.setAttribute("src", randomImage);

// Title

var Header = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
    Header.innerHTML = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    Header.innerHTML = "Player 2 Wins!";
}

else {
    Header.innerHTML = "Draw!";
}