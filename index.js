let randomNumber1 = Math.floor(Math.random() * 6) + 1;  // give random number between 1 - 6 for player1
let randomNumber2 = Math.floor(Math.random() * 6) + 1;  // give random number between 1 - 6 for player2

let player1 = document.querySelector('img.img1').src = "images/dice" + randomNumber1 + ".png";  // creates name for the image used for player1
let player2 = document.querySelector('img.img2').src = "images/dice" + randomNumber2 + ".png";  // creates name for the image used for player1

document.querySelector("h1");


if (randomNumber1 > randomNumber2) {                                        // changes h1 based on outcome of above
  document.querySelector("h1").textContent= "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
