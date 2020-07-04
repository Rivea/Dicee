var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.round(randomNumber1) + 1;

var firstImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.round(randomNumber2) + 1;

var secondImage = "images/dice" + randomNumber2 + ".png";

image1.setAttribute("src", firstImage);
image2.setAttribute("src", secondImage);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's A Draw!";
}
