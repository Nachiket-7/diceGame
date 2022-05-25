var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number generate  1

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// for dice 2 random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number generate 2

var randonImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randonImageSource2); // (img address change)



// conditions

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 1 Wins 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector('h1').innerHTML = "DRAW...!";
}
