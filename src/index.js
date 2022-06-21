///////////pick your team////////////////
let bills = document.getElementById("Bills");
let patriots = document.getElementById("Patriots");
let dolphins = document.getElementById("Dolphins");
let jets = document.getElementById("Jets");

let bengals = document.getElementById("Bengals");
let steelers = document.getElementById("Steelers");
let browns = document.getElementById("Browns");
let ravens = document.getElementById("Ravens");

let titans = document.getElementById("Titans");
let colts = document.getElementById("Colts");
let texans = document.getElementById("Texans");
let jaguars = document.getElementById("Jaguars");

let chiefs = document.getElementById("Chiefs");
let raiders = document.getElementById("Raiders");
let chargers = document.getElementById("Chargers");
let broncos = document.getElementById("Broncos");

let cowboys = document.getElementById("Cowboys");
let eagles = document.getElementById("Eagles");
let commanders = document.getElementById("Commanders");
let giants = document.getElementById("Giants");

let packers = document.getElementById("Packers");
let vikings = document.getElementById("Vikings");
let bears = document.getElementById("Bears");
let lions = document.getElementById("Lions");

let buccaneers = document.getElementById("Buccaneers");
let saints = document.getElementById("Saints");
let falcons = document.getElementById("Falcons");
let panthers = document.getElementById("Panthers");

let rams = document.getElementById("Rams");
let cardinals = document.getElementById("Cardinals");
let fortyniners = document.getElementById("49ers");
let seahawks = document.getElementById("Seahawks");

//////////////////////////////////////////////////////////

let intro = document.getElementById("intro");
let begin = document.getElementById("begin");
let gameDisplay = document.getElementById("game");

begin.style.display = "none";
gameDisplay.style.display = "none";

function hideIntro() {
  intro.style.display = "none";
  gameDisplay.style.display = "block";
  headerText.style.display = "block";
  contactPage.style.display = "none";
  retireButton.style.display = "block";
}

function showIntro() {
  intro.style.display = "block";
  gameDisplay.style.display = "none";
}

let myTeam1 = document.getElementById("myTeam1");
let myTeam2 = document.getElementById("myTeam2");
let chosenTeam = null;

function myteam(event) {
  myTeam1.innerHTML = event.target.innerHTML;
  myTeam2.innerHTML = event.target.innerHTML;
  chosenTeam = event.target.innerHTML;
  begin.style.display = "block";
}

begin.addEventListener("click", hideIntro);
begin.addEventListener("click", pickCity);

bills.addEventListener("click", myteam);
patriots.addEventListener("click", myteam);
dolphins.addEventListener("click", myteam);
jets.addEventListener("click", myteam);

bengals.addEventListener("click", myteam);
steelers.addEventListener("click", myteam);
browns.addEventListener("click", myteam);
ravens.addEventListener("click", myteam);

titans.addEventListener("click", myteam);
colts.addEventListener("click", myteam);
texans.addEventListener("click", myteam);
jaguars.addEventListener("click", myteam);

chiefs.addEventListener("click", myteam);
raiders.addEventListener("click", myteam);
chargers.addEventListener("click", myteam);
broncos.addEventListener("click", myteam);

cowboys.addEventListener("click", myteam);
eagles.addEventListener("click", myteam);
commanders.addEventListener("click", myteam);
giants.addEventListener("click", myteam);

packers.addEventListener("click", myteam);
vikings.addEventListener("click", myteam);
bears.addEventListener("click", myteam);
lions.addEventListener("click", myteam);

buccaneers.addEventListener("click", myteam);
saints.addEventListener("click", myteam);
falcons.addEventListener("click", myteam);
panthers.addEventListener("click", myteam);

rams.addEventListener("click", myteam);
cardinals.addEventListener("click", myteam);
fortyniners.addEventListener("click", myteam);
seahawks.addEventListener("click", myteam);

/////game code/////
let year = 2022;
let randNum = "";
let count = 1;
let wins = 0;
let losses = 0;
let displayWins = "";
let displayLosses = "";
let endSeason = false;

let headerText = document.getElementById("header");
let yearText = document.getElementById("year");
yearText.innerHTML = "Year: " + year;

let wildCardRound = false;
let divisionalRound = false;
let championshipRound = false;
let superBowl = false;

//////////////logic for each game////////////

function weekOneResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins = 1;
    displayLosses = 0;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek1.innerHTML = "Week 1: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayWins = 0;
    displayLosses = 1;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek1.innerHTML = "Week 1: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekTwoResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek2.innerHTML = "Week 2: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek2.innerHTML = "Week 2: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekThreeResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek3.innerHTML = "Week 3: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek3.innerHTML = "Week 3: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekFourResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek4.innerHTML = "Week 4: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek4.innerHTML = "Week 4: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekFiveResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek5.innerHTML = "Week 5: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek5.innerHTML = "Week 5: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekSixResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek6.innerHTML = "Week 6: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek6.innerHTML = "Week 6: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekSevenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek7.innerHTML = "Week 7: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek7.innerHTML = "Week 7: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekEightResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek8.innerHTML = "Week 8: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek8.innerHTML = "Week 8: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekNineResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek9.innerHTML = "Week 9: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek9.innerHTML = "Week 9: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekTenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek10.innerHTML =
      "Week 10: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek10.innerHTML =
      "Week 10: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekElevenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek11.innerHTML =
      "Week 11: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek11.innerHTML =
      "Week 11: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekTwelveResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek12.innerHTML =
      "Week 12: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek12.innerHTML =
      "Week 12: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekThirteenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek13.innerHTML =
      "Week 13: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek13.innerHTML =
      "Week 13: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekFourteenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek14.innerHTML =
      "Week 14: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek14.innerHTML =
      "Week 14: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekFifteenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek15.innerHTML =
      "Week 15: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek15.innerHTML =
      "Week 15: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekSixteenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek16.innerHTML =
      "Week 16: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek16.innerHTML =
      "Week 16: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function weekSeventeenResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek17.innerHTML =
      "Week 17: W" + " " + wins + " " + "-" + " " + losses;
  } else {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
    resultWeek17.innerHTML =
      "Week 17: L" + " " + wins + " " + "-" + " " + losses;
  }
}

function wildCardResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    resultWC.innerHTML = "Wild Card Winner!";
    playWeekButton.innerHTML = "Play Divisional Round!";
    addWins();
    divisionalRound = true;
    wildCardRound = false;
  } else {
    addLosses();
    wildCardRound = false;
    endSeason = true;
    resultWC.innerHTML = "Wild Card Loser.";
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    seasonSnip = "Lost Wild Card Round";
  }
}

function divisionalRoundResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    resultDivis.innerHTML = "Divisional Round Winner!";
    playWeekButton.innerHTML = "Play Conference Championship!";
    addWins();
    championshipRound = true;
    divisionalRound = false;
  } else {
    addLosses();
    divisionalRound = false;
    endSeason = true;
    resultDivis.innerHTML = "Divisional Round Loser.";
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    seasonSnip = "Lost Divisional Round";
  }
}

function conferenceChampionshipResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    resultConfChamp.innerHTML = "Conference Champion!";
    playWeekButton.innerHTML = "Play Super Bowl!";
    addWins();
    superBowl = true;
    championshipRound = false;
  } else {
    addLosses();
    championshipRound = false;
    endSeason = true;
    resultConfChamp.innerHTML = "Conference Championship Loser.";
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    seasonSnip = "Lost Conference Championship";
  }
}

function superBowlResult() {
  randNum = Math.floor(Math.random() * 100);
  if (randNum > 50) {
    resultSB.innerHTML = "Super Bowl Winner!";
    addWins();
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    seasonSnip = "Won Super Bowl!";
    endSeason = true;
  } else {
    addLosses();
    resultSB.innerHTML = "Super Bowl Loser.";
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    seasonSnip = "Lost Super Bowl";
    endSeason = true;
  }
}

//////////////////////////////////////////////////

////////logic when play game is clicked/////////

function playWeek() {
  if (count === 1) {
    weekOneResult();
    resultWeek1.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 2";
    count++;
  } else if (count === 2) {
    weekTwoResult();
    resultWeek2.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 3";
    count++;
  } else if (count === 3) {
    weekThreeResult();
    resultWeek3.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 4";
    count++;
  } else if (count === 4) {
    weekFourResult();
    resultWeek4.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 5";
    count++;
  } else if (count === 5) {
    weekFiveResult();
    resultWeek5.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 6";
    count++;
  } else if (count === 6) {
    weekSixResult();
    resultWeek6.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 7";
    count++;
  } else if (count === 7) {
    weekSevenResult();
    resultWeek7.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 8";
    count++;
  } else if (count === 8) {
    weekEightResult();
    resultWeek8.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 9";
    count++;
  } else if (count === 9) {
    weekNineResult();
    resultWeek9.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 10";
    count++;
  } else if (count === 10) {
    weekTenResult();
    resultWeek10.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 11";
    count++;
  } else if (count === 11) {
    weekElevenResult();
    resultWeek11.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 12";
    count++;
  } else if (count === 12) {
    weekTwelveResult();
    resultWeek12.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 13";
    count++;
  } else if (count === 13) {
    weekThirteenResult();
    resultWeek13.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 14";
    count++;
  } else if (count === 14) {
    weekFourteenResult();
    resultWeek14.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 15";
    count++;
  } else if (count === 15) {
    weekFifteenResult();
    resultWeek15.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 16";
    count++;
  } else if (count === 16) {
    weekSixteenResult();
    resultWeek16.style.display = "block";
    playWeekButton.innerHTML = "Click to play Week 17";
    count++;
  } else if (count === 17) {
    weekSeventeenResult();
    resultWeek17.style.display = "block";
    playWeekButton.innerHTML = "Season Over";
    count++;
  } else if (count === 18 && wins >= 9 && wins <= 13) {
    showRegularSeason.style.display = "none";
    playWeekButton.innerHTML = "Play Wild Card Round!";
    count++;
  } else if (count === 18 && wins > 13) {
    showRegularSeason.style.display = "none";
    playWeekButton.innerHTML = "Play Divisional Round!";
    count++;
  } else if (wildCardRound) {
    resultWC.style.display = "block";
    wildCardResult();
  } else if (divisionalRound) {
    resultDivis.style.display = "block";
    divisionalRoundResult();
  } else if (championshipRound) {
    resultConfChamp.style.display = "block";
    conferenceChampionshipResult();
  } else if (superBowl) {
    resultSB.style.display = "block";
    superBowlResult();
  }
}

let showRegularSeason = document.getElementById("text");

function determinePlayoffs() {
  if (count === 18 && wins < 9) {
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    startNewSeasonButton.innerHTML =
      "You have missed the playoffs. Click to start the next season.";
    seasonSnip = "Missed playoffs.";
    endSeason = true;
  } else if (count === 18 && wins >= 9 && wins <= 11 && !wildCardRound) {
    playoffsDiv.style.display = "block";
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing on the road in the Wild Card Round! Click to advance!";
    wildCardRound = true;
  } else if (count === 18 && wins > 11 && wins <= 13 && !wildCardRound) {
    playoffsDiv.style.display = "block";
    wildCardRound = true;
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing at home in the Wild Card Round! Click to advance!";
  } else if (count === 18 && wins > 13 && !divisionalRound) {
    playoffsDiv.style.display = "block";
    divisionalRound = true;
    playWeekButton.innerHTML =
      "You made the playoffs! You received a bye and will play at home in the Divisional Round! Click to advance!";
  }
}
///////////////////////////////////////

function resetSeason() {
  years++;
  endSeason = false;
  randNum = "";
  count = 1;
  wins = 0;
  losses = 0;
  displayWins = "";
  displayLosses = "";
  myTeam2.innerHTML = chosenTeam;
  wildCardRound = false;
  divisionalRound = false;
  championshipRound = false;
  superBowl = false;
  resultWeek1.style.display = "none";
  resultWeek2.style.display = "none";
  resultWeek3.style.display = "none";
  resultWeek4.style.display = "none";
  resultWeek5.style.display = "none";
  resultWeek6.style.display = "none";
  resultWeek7.style.display = "none";
  resultWeek8.style.display = "none";
  resultWeek9.style.display = "none";
  resultWeek10.style.display = "none";
  resultWeek11.style.display = "none";
  resultWeek12.style.display = "none";
  resultWeek13.style.display = "none";
  resultWeek14.style.display = "none";
  resultWeek15.style.display = "none";
  resultWeek16.style.display = "none";
  resultWeek17.style.display = "none";
  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";
  showRegularSeason.style.display = "block";
  playWeekButton.style.display = "block";
  playWeekButton.innerHTML = "Click to play Week 1";
  startNewSeasonButton.style.display = "none";
}

//////play week button
let playWeekButton = document.getElementById("playWeek");
playWeekButton.innerHTML = "Click to play Week 1";
playWeekButton.addEventListener("click", playWeek);
playWeekButton.addEventListener("click", determinePlayoffs);
playWeekButton.addEventListener("click", endGame);

/////start over//////////
let startNewSeasonButton = document.getElementById("restartButton");
startNewSeasonButton.addEventListener("click", addSeasonHistory);
startNewSeasonButton.addEventListener("click", resetSeason);
startNewSeasonButton.addEventListener("click", pickCity);
startNewSeasonButton.addEventListener("click", careerAlert);
startNewSeasonButton.style.display = "none";
startNewSeasonButton.innerHTML = "Start new season";

////////////////////////////////

//////week results////////

let resultWeek1 = document.getElementById("resultWeek1");
resultWeek1.style.display = "none";

let resultWeek2 = document.getElementById("resultWeek2");
resultWeek2.style.display = "none";

let resultWeek3 = document.getElementById("resultWeek3");
resultWeek3.style.display = "none";

let resultWeek4 = document.getElementById("resultWeek4");
resultWeek4.style.display = "none";

let resultWeek5 = document.getElementById("resultWeek5");
resultWeek5.style.display = "none";

let resultWeek6 = document.getElementById("resultWeek6");
resultWeek6.style.display = "none";

let resultWeek7 = document.getElementById("resultWeek7");
resultWeek7.style.display = "none";

let resultWeek8 = document.getElementById("resultWeek8");
resultWeek8.style.display = "none";

let resultWeek9 = document.getElementById("resultWeek9");
resultWeek9.style.display = "none";

let resultWeek10 = document.getElementById("resultWeek10");
resultWeek10.style.display = "none";

let resultWeek11 = document.getElementById("resultWeek11");
resultWeek11.style.display = "none";

let resultWeek12 = document.getElementById("resultWeek12");
resultWeek12.style.display = "none";

let resultWeek13 = document.getElementById("resultWeek13");
resultWeek13.style.display = "none";

let resultWeek14 = document.getElementById("resultWeek14");
resultWeek14.style.display = "none";

let resultWeek15 = document.getElementById("resultWeek15");
resultWeek15.style.display = "none";

let resultWeek16 = document.getElementById("resultWeek16");
resultWeek16.style.display = "none";

let resultWeek17 = document.getElementById("resultWeek17");
resultWeek3.style.display = "none";

let resultWC = document.getElementById("resultWC");
resultWC.style.display = "none";

let resultDivis = document.getElementById("resultDivis");
resultDivis.style.display = "none";

let resultConfChamp = document.getElementById("resultConfChamp");
resultConfChamp.style.display = "none";

let resultSB = document.getElementById("resultSB");
resultSB.style.display = "none";

//////////history page///////////

let seasonSnip;
let historyPage = document.getElementById("historyPage");
historyPage.style.display = "none";

function addSeasonHistory() {
  historyPage.style.display = "block";

  if (historyPage.children.length === 0) {
    let header = document.createElement("h3");
    let headerNode = document.createTextNode("Yearly History");
    header.appendChild(headerNode);
    historyPage.appendChild(header);
  }

  let para = document.createElement("p");
  let node = document.createTextNode(
    "Year: " + year + " " + wins + " " + "-" + " " + losses + " " + seasonSnip
  );
  para.appendChild(node);
  para.id = "p1";

  let child = document.getElementById("p1");
  historyPage.insertBefore(para, child);
  year++;

  yearText.innerHTML = "Year: " + year;
}

////////////////////////////

///////////stats//////////////////
let statsPage = document.getElementById("stats");
statsPage.style.display = "none";
let showStatsButton = document.getElementById("showStats");
let hideStatsButton = document.getElementById("hideStats");
hideStatsButton.style.display = "none";
showStatsButton.addEventListener("click", showStats);
hideStatsButton.addEventListener("click", showStats);

function showStats() {
  if (statsPage.style.display === "none") {
    statsPage.style.display = "block";
    showStatsButton.style.display = "none";
    hideStatsButton.style.display = "block";
  } else if (statsPage.style.display === "block") {
    statsPage.style.display = "none";
    hideStatsButton.style.display = "none";
    showStatsButton.style.display = "block";
  }
}

function addWins() {
  careerWins++;
  careerWinsText.innerHTML = "Career Wins: " + careerWins;
  if (wildCardRound) {
    playoffWins++;
    wildCardWins++;
    playoffWinsText.innerHTML = "Playoff Wins: " + playoffWins;
    wildCardRoundWinsText.innerHTML = "Wild Card Wins: " + wildCardWins;
  } else if (divisionalRound) {
    playoffWins++;
    divisionalRoundWins++;
    playoffWinsText.innerHTML = "Playoff Wins: " + playoffWins;
    divisionaRoundWinsText.innerHTML =
      "Divisional Round Wins: " + divisionalRoundWins;
  } else if (championshipRound) {
    playoffWins++;
    conferenceChampionshipWins++;
    playoffWinsText.innerHTML = "Playoff Wins: " + playoffWins;
    conferenceChampionshipWinsText.innerHTML =
      "Conference Championship Wins: " + conferenceChampionshipWins;
  } else if (superBowl) {
    playoffWins++;
    superBowlWins++;
    playoffWinsText.innerHTML = "Playoff Wins: " + playoffWins;
    superBowlWinsText.innerHTML = "Super Bowl Wins: " + superBowlWins;
  }
}

function addLosses() {
  careerLosses++;
  careerLossesText.innerHTML = "Career Losses: " + careerLosses;
  if (wildCardRound) {
    playoffLosses++;
    wildCardLosses++;
    playoffLossesText.innerHTML = "Playoff Losses: " + playoffLosses;
    wildCardRoundLossesText.innerHTML = "Wild Card Losses: " + wildCardLosses;
  } else if (divisionalRound) {
    playoffLosses++;
    divisionalRoundLosses++;
    playoffLossesText.innerHTML = "Playoff Losses: " + playoffLosses;
    divisionalRoundLossesText.innerHTML =
      "Divisional Round Losses: " + divisionalRoundLosses;
  } else if (championshipRound) {
    playoffLosses++;
    conferenceChampionshipLosses++;
    playoffLossesText.innerHTML = "Playoff Losses: " + playoffLosses;
    conferenceChampionshipLossesText.innerHTML =
      "Conference Championship Losses: " + conferenceChampionshipLosses;
  } else if (superBowl) {
    playoffLosses++;
    superBowlLosses++;
    playoffLossesText.innerHTML = "Playoff Losses: " + playoffLosses;
    superBowlLossesText.innerHTML = "Super Bowl Losses: " + superBowlLosses;
  }
}

let careerWins = 0;
let careerLosses = 0;
let playoffWins = 0;
let playoffLosses = 0;
let wildCardWins = 0;
let wildCardLosses = 0;
let divisionalRoundWins = 0;
let divisionalRoundLosses = 0;
let conferenceChampionshipWins = 0;
let conferenceChampionshipLosses = 0;
let superBowlWins = 0;
let superBowlLosses = 0;

let careerWinsText = document.getElementById("careerWins");
let careerLossesText = document.getElementById("careerLosses");
let playoffWinsText = document.getElementById("playoffWins");
let playoffLossesText = document.getElementById("playoffLosses");
let superBowlWinsText = document.getElementById("superBowlWins");
let superBowlLossesText = document.getElementById("superBowlLosses");
let conferenceChampionshipWinsText = document.getElementById("confChampWins");
let conferenceChampionshipLossesText = document.getElementById(
  "confChampLosses"
);
let divisionaRoundWinsText = document.getElementById("divWins");
let divisionalRoundLossesText = document.getElementById("divLosses");
let wildCardRoundWinsText = document.getElementById("wcWins");
let wildCardRoundLossesText = document.getElementById("wcLosses");

////////////////

/////////super bowl cities////////

let superBowlCity = document.getElementById("superBowlCity");
let picker = 0;

let cities = [
  "Los Angeles",
  "Tampa Bay",
  "Phoenix",
  "Santa Clara",
  "New Orleans",
  "Atlanta",
  "Las Vegas",
  "Dallas",
  "Indianapolis",
  "Houston",
  "Miami"
];

function pickCity() {
  if (picker === 11) {
    picker = 0;
  }
  superBowlCity.innerHTML = "The Super Bowl is in " + cities[picker];

  picker++;
}

///////////////////////////

////////end game retirement
let years = 0;

let finalCareerSum = document.getElementById("careerOver");
let careerOverAlert = document.getElementById("careerOverAlert");
let newCareer = document.getElementById("newCareer");
let seeFinalStats = document.getElementById("whatACareer");
let playoffsDiv = document.getElementById("playoffs");

let careerWinsFinal = document.getElementById("careerWinsFinal");
let careerLossesFinal = document.getElementById("careerLossesFinal");
let playoffWinsFinal = document.getElementById("playoffWinsFinal");
let playoffLossesFinal = document.getElementById("playoffLossesFinal");
let superBowlWinsFinal = document.getElementById("superBowlWinsFinal");
let superBowlLossesFinal = document.getElementById("superBowlLossesFinal");
let confChampWinsFinal = document.getElementById("confChampWinsFinal");
let confChampLossesFinal = document.getElementById("confChampLossesFinal");
let divWinsFinal = document.getElementById("divWinsFinal");
let divLossesFinal = document.getElementById("divLossesFinal");
let wcWinsFinal = document.getElementById("wcWinsFinal");
let wcLossesFinal = document.getElementById("wcLossesFinal");

seeFinalStats.style.display = "none";
finalCareerSum.style.display = "none";
careerOverAlert.style.display = "none";
newCareer.addEventListener("click", playNewCareer);
seeFinalStats.addEventListener("click", seeFinalStatsButton);

function seeFinalStatsButton() {
  finalCareerSum.style.display = "block";
  playoffsDiv.style.display = "none";
  seeFinalStats.style.display = "none";
  headerText.style.display = "none";
  myTeam2.innerHTML = chosenTeam;

  careerWinsFinal.innerHTML = "Career Wins: " + careerWins;
  careerLossesFinal.innerHTML = "Career Losses: " + careerLosses;
  playoffWinsFinal.innerHTML = "Playoff Wins: " + playoffWins;
  playoffLossesFinal.innerHTML = "Playoff Losses: " + playoffLosses;
  superBowlWinsFinal.innerHTML = "Super Bowl Wins: " + superBowlWins;
  superBowlLossesFinal.innerHTML = "Super Bowl Losses: " + superBowlLosses;
  confChampWinsFinal.innerHTML =
    "Conference Championship Wins: " + conferenceChampionshipWins;
  confChampLossesFinal.innerHTML =
    "Conference Championship Losses: " + conferenceChampionshipLosses;
  divWinsFinal.innerHTML = "Divisional Round Wins: " + divisionalRoundWins;
  divLossesFinal.innerHTML =
    "Divisional Round Losses: " + divisionalRoundLosses;
  wcWinsFinal.innerHTML = "Wild Card Wins: " + wildCardWins;
  wcLossesFinal.innerHTML = "Wild Card Losses: " + wildCardLosses;
  resultWeek1.style.display = "none";
  resultWeek2.style.display = "none";
  resultWeek3.style.display = "none";
  resultWeek4.style.display = "none";
  resultWeek5.style.display = "none";
  resultWeek6.style.display = "none";
  resultWeek7.style.display = "none";
  resultWeek8.style.display = "none";
  resultWeek9.style.display = "none";
  resultWeek10.style.display = "none";
  resultWeek11.style.display = "none";
  resultWeek12.style.display = "none";
  resultWeek13.style.display = "none";
  resultWeek14.style.display = "none";
  resultWeek15.style.display = "none";
  resultWeek16.style.display = "none";
  resultWeek17.style.display = "none";
  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";
}

function careerAlert() {
  if (years === 29) {
    careerOverAlert.style.display = "block";
    careerOverAlert.innerHTML = "This is your 30th, and final, season!";
  }
}

function endGame() {
  if (years === 29 && endSeason) {
    careerOverAlert.style.display = "none";
    seeFinalStats.style.display = "block";
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "none";
    statsPage.style.display = "none";
    hideStatsButton.style.display = "none";
    showStatsButton.style.display = "none";
    addSeasonHistory();
  }
}

let retireButton = document.getElementById("retireButton");
retireButton.innerHTML = "Click to retire";

retireButton.addEventListener("click", retire);

function retire() {
  showStatsButton.style.display = "none";
  hideStatsButton.style.dispaly = "none";
  retireButton.style.display = "none";
  playWeekButton.style.display = "none";
  resultWeek1.style.display = "none";
  resultWeek2.style.display = "none";
  resultWeek3.style.display = "none";
  resultWeek4.style.display = "none";
  resultWeek5.style.display = "none";
  resultWeek6.style.display = "none";
  resultWeek7.style.display = "none";
  resultWeek8.style.display = "none";
  resultWeek9.style.display = "none";
  resultWeek10.style.display = "none";
  resultWeek11.style.display = "none";
  resultWeek12.style.display = "none";
  resultWeek13.style.display = "none";
  resultWeek14.style.display = "none";
  resultWeek15.style.display = "none";
  resultWeek16.style.display = "none";
  resultWeek17.style.display = "none";
  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";
  seeFinalStats.style.display = "block";
  seeFinalStats.innerHTML =
    "You've retired from the NFL. Click to see your final career stats.";
}

function playNewCareer() {
  years = 0;
  year = 2022;
  endSeason = false;
  randNum = "";
  count = 1;
  wins = 0;
  losses = 0;
  picker = 0;
  yearText.innerHTML = "Year: " + year;
  contactPage.style.display = "block";

  careerWins = 0;
  careerLosses = 0;
  playoffWins = 0;
  playoffLosses = 0;
  wildCardWins = 0;
  wildCardLosses = 0;
  divisionalRoundWins = 0;
  divisionalRoundLosses = 0;
  conferenceChampionshipWins = 0;
  conferenceChampionshipLosses = 0;
  superBowlWins = 0;
  superBowlLosses = 0;
  displayWins = "";
  displayLosses = "";
  myTeam2.innerHTML = chosenTeam;
  wildCardRound = false;
  divisionalRound = false;
  championshipRound = false;
  superBowl = false;

  careerWinsText.innerHTML = "Career Wins: " + careerWins;
  careerLossesText.innerHTML = "Career Losses: " + careerLosses;
  playoffWinsText.innerHTML = "Playoff Wins: " + playoffWins;
  playoffLossesText.innerHTML = "Playoff Losses: " + playoffLosses;
  superBowlWinsText.innerHTML = "Super Bowl Wins: " + superBowlWins;
  superBowlLossesText.innerHTML = "Super Bowl Losses: " + superBowlLosses;
  conferenceChampionshipWinsText.innerHTML =
    "Conference Championship Wins: " + conferenceChampionshipWins;
  conferenceChampionshipLossesText.innerHTML =
    "Conference Championship Losses: " + conferenceChampionshipLosses;
  divisionaRoundWinsText.innerHTML =
    "Divisional Round Wins: " + divisionalRoundWins;
  divisionalRoundLossesText.innerHTML =
    "Divisional Round Losses: " + divisionalRoundLosses;
  wildCardRoundWinsText.innerHTML = "Wild Card Wins: " + wildCardWins;
  wildCardRoundLossesText.innerHTML = "Wild Card Losses: " + wildCardLosses;

  while (historyPage.firstChild) {
    historyPage.firstChild.remove();
  }

  resultWeek1.style.display = "none";
  resultWeek2.style.display = "none";
  resultWeek3.style.display = "none";
  resultWeek4.style.display = "none";
  resultWeek5.style.display = "none";
  resultWeek6.style.display = "none";
  resultWeek7.style.display = "none";
  resultWeek8.style.display = "none";
  resultWeek9.style.display = "none";
  resultWeek10.style.display = "none";
  resultWeek11.style.display = "none";
  resultWeek12.style.display = "none";
  resultWeek13.style.display = "none";
  resultWeek14.style.display = "none";
  resultWeek15.style.display = "none";
  resultWeek16.style.display = "none";
  resultWeek17.style.display = "none";
  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";
  showRegularSeason.style.display = "block";
  playWeekButton.style.display = "block";
  playWeekButton.innerHTML = "Click to play Week 1";
  startNewSeasonButton.style.display = "none";
  intro.style.display = "block";
  gameDisplay.style.display = "none";
  showStatsButton.style.display = "block";
  finalCareerSum.style.display = "none";
}

let contactPage = document.getElementById("contactPage");

/////////////////////
