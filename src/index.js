document.body.style.backgroundColor = "beige";

let randNum = "";
let count = 1;
let wins = "";
let losses = "";

let resetButton = document.getElementById("reset");
let clickToPlay = document.getElementById("text").children[0];

let randomNumber = document.getElementById("text").children[1];
randomNumber.innerHTML = "Score: " + " " + randNum;

let counter = document.getElementById("text").children[2];
counter.innerHTML = "Week: " + " " + count;

let winners = document.getElementById("text").children[3];
winners.innerHTML = "Wins: " + " " + wins;

let losers = document.getElementById("text").children[4];
losers.innerHTML = "Losses: " + " " + losses;

function getRandom() {
  randNum = Math.floor(Math.random() * 100);
  count++;

  if (randNum > 50) {
    wins++;
  } else {
    losses++;
  }
  randomNumber.innerHTML = "Score: " + " " + randNum;
  counter.innerHTML = "Week: " + " " + count;
  winners.innerHTML = "Wins: " + " " + wins;
  losers.innerHTML = "Losses: " + " " + losses;
}

function reset() {
  randNum = "";
  count = 1;
  wins = "";
  losses = "";
  randomNumber.innerHTML = "Score: " + " " + randNum;
  counter.innerHTML = "Week: " + " " + count;
  winners.innerHTML = "Wins: " + " " + wins;
  losers.innerHTML = "Losses: " + " " + losses;
}

clickToPlay.onclick = getRandom;
resetButton.onclick = reset;
