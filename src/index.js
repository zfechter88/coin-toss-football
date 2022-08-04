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

/////////////team objects///////////
let NFL = [];

let NFLConferences = [];

let AFC = [];
let NFC = [];

let AFCE = {
  name: "AFCE",
  teams: []
};
let AFCN = {
  name: "AFCN",
  teams: []
};
let AFCS = {
  name: "AFCS",
  teams: []
};
let AFCW = {
  name: "AFCW",
  teams: []
};
let NFCE = {
  name: "NFCE",
  teams: []
};
let NFCN = {
  name: "NFCN",
  teams: []
};
let NFCS = {
  name: "NFCS",
  teams: []
};
let NFCW = {
  name: "NFCW",
  teams: []
};

let Bills = {
  name: "Bills",
  conference: AFC,
  division: AFCE,
  roadOpp: "@ Bills",
  homeOpp: "vs. Bills"
};

let Patriots = {
  name: "Patriots",
  conference: AFC,
  division: AFCE,
  roadOpp: "@ Patriots",
  homeOpp: "vs. Patriots"
};

let Dolphins = {
  name: "Dolphins",
  conference: AFC,
  division: AFCE,
  roadOpp: "@ Dolphins",
  homeOpp: "vs. Dolphins"
};

let Jets = {
  name: "Jets",
  conference: AFC,
  division: AFCE,
  roadOpp: "@ Jets",
  homeOpp: "vs. Jets"
};

let Bengals = {
  name: "Bengals",
  conference: AFC,
  division: AFCN,
  roadOpp: "@ Bengals",
  homeOpp: "vs. Bengals"
};

let Steelers = {
  name: "Steelers",
  conference: AFC,
  division: AFCN,
  roadOpp: "@ Steelers",
  homeOpp: "vs. Steelers"
};

let Browns = {
  name: "Browns",
  conference: AFC,
  division: AFCN,
  roadOpp: "@ Browns",
  homeOpp: "vs. Browns"
};

let Ravens = {
  name: "Ravens",
  conference: AFC,
  division: AFCN,
  roadOpp: "@ Ravens",
  homeOpp: "vs. Ravens"
};

let Titans = {
  name: "Titans",
  conference: AFC,
  division: AFCS,
  roadOpp: "@ Titans",
  homeOpp: "vs. Titans"
};

let Colts = {
  name: "Colts",
  conference: AFC,
  division: AFCS,
  roadOpp: "@ Colts",
  homeOpp: "vs. Colts"
};

let Texans = {
  name: "Texans",
  conference: AFC,
  division: AFCS,
  roadOpp: "@ Texans",
  homeOpp: "vs. Texans"
};

let Jaguars = {
  name: "Jaguars",
  conference: AFC,
  division: AFCS,
  roadOpp: "@ Jaguars",
  homeOpp: "vs. Jaguars"
};

let Chiefs = {
  name: "Chiefs",
  conference: AFC,
  division: AFCW,
  roadOpp: "@ Chiefs",
  homeOpp: "vs. Chiefs"
};

let Raiders = {
  name: "Raiders",
  conference: AFC,
  division: AFCW,
  roadOpp: "@ Raiders",
  homeOpp: "vs. Raiders"
};

let Chargers = {
  name: "Chargers",
  conference: AFC,
  division: AFCW,
  roadOpp: "@ Chargers",
  homeOpp: "vs. Chargers"
};

let Broncos = {
  name: "Broncos",
  conference: AFC,
  division: AFCW,
  roadOpp: "@ Broncos",
  homeOpp: "vs. Broncos"
};

let Cowboys = {
  name: "Cowboys",
  conference: NFC,
  division: NFCE,
  roadOpp: "@ Cowboys",
  homeOpp: "vs. Cowboys"
};

let Eagles = {
  name: "Eagles",
  conference: NFC,
  division: NFCE,
  roadOpp: "@ Eagles",
  homeOpp: "vs. Eagles"
};

let Commanders = {
  name: "Commanders",
  conference: NFC,
  division: NFCE,
  roadOpp: "@ Commanders",
  homeOpp: "vs. Commanders"
};

let Giants = {
  name: "Giants",
  conference: NFC,
  division: NFCE,
  roadOpp: "@ Giants",
  homeOpp: "vs. Giants"
};

let Packers = {
  name: "Packers",
  conference: NFC,
  division: NFCN,
  roadOpp: "@ Packers",
  homeOpp: "vs. Packers"
};

let Vikings = {
  name: "Vikings",
  conference: NFC,
  division: NFCN,
  roadOpp: "@ Vikings",
  homeOpp: "vs. Vikings"
};

let Bears = {
  name: "Bears",
  conference: NFC,
  division: NFCN,
  roadOpp: "@ Bears",
  homeOpp: "vs. Bears"
};

let Lions = {
  name: "Lions",
  conference: NFC,
  division: NFCN,
  roadOpp: "@ Lions",
  homeOpp: "vs. Lions"
};

let Buccaneers = {
  name: "Buccaneers",
  conference: NFC,
  division: NFCS,
  roadOpp: "@ Buccaneers",
  homeOpp: "vs. Buccaneers"
};

let Saints = {
  name: "Saints",
  conference: NFC,
  division: NFCS,
  roadOpp: "@ Saints",
  homeOpp: "vs. Saints"
};

let Falcons = {
  name: "Falcons",
  conference: NFC,
  division: NFCS,
  roadOpp: "@ Falcons",
  homeOpp: "vs. Falcons"
};

let Panthers = {
  name: "Panthers",
  conference: NFC,
  division: NFCS,
  roadOpp: "@ Panthers",
  homeOpp: "vs. Panthers"
};

let Rams = {
  name: "Rams",
  conference: NFC,
  division: NFCW,
  roadOpp: "@ Rams",
  homeOpp: "vs. Rams"
};

let Cardinals = {
  name: "Cardinals",
  conference: NFC,
  division: NFCW,
  roadOpp: "@ Cardinals",
  homeOpp: "vs. Cardinals"
};

let FortyNiners = {
  name: "FortyNiners",
  conference: NFC,
  division: NFCW,
  roadOpp: "@ FortyNiners",
  homeOpp: "vs. FortyNiners"
};

let Seahawks = {
  name: "Seahawks",
  conference: NFC,
  division: NFCW,
  roadOpp: "@ Seahawks",
  homeOpp: "vs. Seahawks"
};

NFL.push(
  Bills,
  Dolphins,
  Jets,
  Patriots,
  Bengals,
  Steelers,
  Browns,
  Ravens,
  Titans,
  Jaguars,
  Colts,
  Texans,
  Chiefs,
  Raiders,
  Chargers,
  Broncos,
  Cowboys,
  Eagles,
  Commanders,
  Giants,
  Packers,
  Vikings,
  Bears,
  Lions,
  Buccaneers,
  Falcons,
  Saints,
  Panthers,
  Rams,
  Cardinals,
  Seahawks,
  FortyNiners
);

NFLConferences.push(AFC, NFC);
let AFCTEAMS = [];
let NFCTEAMS = [];
AFCTEAMS.push(
  Bills,
  Dolphins,
  Jets,
  Patriots,
  Bengals,
  Steelers,
  Browns,
  Ravens,
  Titans,
  Jaguars,
  Colts,
  Texans,
  Chiefs,
  Raiders,
  Chargers,
  Broncos
);

NFCTEAMS.push(
  Cowboys,
  Eagles,
  Commanders,
  Giants,
  Packers,
  Vikings,
  Bears,
  Lions,
  Buccaneers,
  Falcons,
  Saints,
  Panthers,
  Rams,
  Cardinals,
  Seahawks,
  FortyNiners
);

AFC.push(AFCE, AFCN, AFCS, AFCW);
NFC.push(NFCE, NFCN, NFCS, NFCW);

AFCE.teams.push(Bills, Dolphins, Jets, Patriots);
AFCN.teams.push(Bengals, Steelers, Browns, Ravens);
AFCS.teams.push(Titans, Jaguars, Colts, Texans);
AFCW.teams.push(Chiefs, Raiders, Chargers, Broncos);
NFCE.teams.push(Cowboys, Eagles, Commanders, Giants);
NFCN.teams.push(Packers, Vikings, Bears, Lions);
NFCS.teams.push(Buccaneers, Falcons, Saints, Panthers);
NFCW.teams.push(Rams, Cardinals, Seahawks, FortyNiners);

//////////////////////////////////////////////////

//////////create schedule////////////
let myTeamObject;

let mySchedule = [];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

let scoreButton = document.getElementById("scoreTest");

let schedule = document.getElementById("schedule");
let genWeek = 1;
let eachElement;

function generateSchedule() {
  playWeekButton.style.display = "block";
  scoreButton.style.display = "none";
  while (schedule.firstChild) {
    schedule.removeChild(schedule.firstChild);
  }
  if (mySchedule.length > 1) {
    mySchedule = [];
  }

  let myTeam = myTeamObject;
  let myDivision = myTeam.division;

  /////determine 6 conference opponents////////
  let divisionOpponents = myDivision.teams.filter(
    (team) => team.name !== myTeam.name
  );

  divisionOpponents.forEach((team) => mySchedule.push(team.roadOpp));
  divisionOpponents.forEach((team) => mySchedule.push(team.homeOpp));
  ////////////////////////////////////////

  ///4 games against a division from in coference//////////
  let availableConfDivisions = myTeam.conference.filter(
    (division) => division !== myTeam.division
  );

  let divPicker1 = Math.round(Math.random() * 2);
  availableConfDivisions = availableConfDivisions[divPicker1];
  shuffle(availableConfDivisions.teams);
  mySchedule.push(availableConfDivisions.teams[0].roadOpp);
  mySchedule.push(availableConfDivisions.teams[1].roadOpp);
  mySchedule.push(availableConfDivisions.teams[0].homeOpp);
  mySchedule.push(availableConfDivisions.teams[1].homeOpp);

  ////////////////////////////////////////////////////////

  ///4 games against a division out conference///////////
  let availableNonConfDivisions = NFLConferences.filter(
    (conference) => conference !== myTeam.conference
  );

  let divPicker2 = Math.round(Math.random() * 3);
  availableNonConfDivisions = availableNonConfDivisions[0][divPicker2];

  shuffle(availableNonConfDivisions.teams);
  mySchedule.push(availableNonConfDivisions.teams[0].roadOpp);
  mySchedule.push(availableNonConfDivisions.teams[1].roadOpp);
  mySchedule.push(availableNonConfDivisions.teams[0].homeOpp);
  mySchedule.push(availableNonConfDivisions.teams[1].homeOpp);

  /////////////////////////////////

  /////////2 games against teams from the two remaining division in conf////
  let available2ConfDivisions = myTeam.conference.filter(
    (division) =>
      division !== myTeam.division && division !== availableConfDivisions
  );
  available2ConfDivisions = available2ConfDivisions.map((div) => div.teams);

  shuffle(available2ConfDivisions);
  const divx1 = available2ConfDivisions[0];
  const divx2 = available2ConfDivisions[1];
  shuffle(divx1);
  shuffle(divx2);
  mySchedule.push(divx1[0].roadOpp);
  mySchedule.push(divx2[0].homeOpp);
  ///////////////////////////////////////////////

  //////1 non conference opponent from other division//////
  let available3NonConfDivisions = NFLConferences.filter(
    (conference) => conference !== myTeam.conference
  );

  available3NonConfDivisions = available3NonConfDivisions[0].filter(
    (division) => division.name !== availableNonConfDivisions.name
  );

  available3NonConfDivisions = available3NonConfDivisions.map(
    (division) => division.teams
  );
  shuffle(available3NonConfDivisions);

  available3NonConfDivisions = available3NonConfDivisions[0];

  shuffle(available3NonConfDivisions); //array of 4 teams in division
  let randPick2 = Math.round(Math.random());
  if (randPick2 === 0) {
    mySchedule.push(available3NonConfDivisions[0].roadOpp);
  } else if (randPick2 === 1) {
    mySchedule.push(available3NonConfDivisions[0].homeOpp);
  }

  available3NonConfDivisions.slice(0);
  shuffle(available3NonConfDivisions);

  ///////////////////////////////////////////

  shuffle(mySchedule);
  mySchedule.forEach((element) => {
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Week: " + genWeek + " " + element
    );
    week.appendChild(textnode);
    document.getElementById("schedule").appendChild(week);
    week.setAttribute("id", "week " + genWeek);
    genWeek++;
    if (genWeek === 18) {
      genWeek = 1;
    }
  });
}

scoreButton.addEventListener("click", generateSchedule);

///////////////////////////////////////////

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

  function setTeam(team) {
    if (team.name === event.target.innerHTML) {
      myTeamObject = team;
    }
  }

  NFL.forEach(setTeam);

  begin.style.display = "block";
  scoreButton.style.display = "block";
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

///////generate score///////

let highScores = [38, 45, 48, 49, 56, 63];
let mediumScores = [17, 20, 21, 24, 27, 28, 30, 35];
let lowScores = [0, 3, 6, 7, 10, 13, 14];
let myScore = null;
let oppScore = null;

function getmyScore() {
  let randNum = Math.floor(Math.random() * 100);
  if (randNum < 15) {
    randNum = Math.floor(Math.random() * 6);
    myScore = lowScores[randNum];
  } else if (randNum > 15 && randNum < 75) {
    randNum = Math.floor(Math.random() * 8);
    myScore = mediumScores[randNum];
  } else if (randNum > 75) {
    randNum = Math.floor(Math.random() * 5);
    myScore = highScores[randNum];
  }
}

function getoppScore() {
  let randNum = Math.floor(Math.random() * 100);
  if (randNum < 15) {
    randNum = Math.floor(Math.random() * 6);
    oppScore = lowScores[randNum];
  } else if (randNum > 15 && randNum < 75) {
    randNum = Math.floor(Math.random() * 8);
    oppScore = mediumScores[randNum];
  } else if (randNum > 75) {
    randNum = Math.floor(Math.random() * 5);
    oppScore = highScores[randNum];
  }
}

function decideWinner() {
  getmyScore();
  getoppScore();
  if (myScore > oppScore) {
    document.getElementById("week " + genWeek).innerHTML =
      "Week:  " +
      genWeek +
      " Winner " +
      mySchedule[genWeek - 1] +
      " " +
      myScore +
      " " +
      "-" +
      " " +
      oppScore;
    genWeek++;
  } else if (oppScore > myScore) {
    document.getElementById("week " + genWeek).innerHTML =
      "Week:  " +
      genWeek +
      " Loser " +
      mySchedule[genWeek - 1] +
      " " +
      myScore +
      " " +
      "-" +
      " " +
      oppScore;
    genWeek++;
  } else if (oppScore === myScore) {
    decideWinner();
  }
}

function decidePlayoffWinner() {
  if (wildCardRound && wins <= 11) {
    if (myScore > oppScore) {
      document.getElementById("wcRoundOpponent").innerHTML =
        "Wild Card Round: Winner " +
        wcOpponent.roadOpp +
        myScore +
        " " +
        oppScore;
    } else if (oppScore > myScore) {
      document.getElementById("wcRoundOpponent").innerHTML =
        "Wild Card Round: Loser " +
        wcOpponent.roadOpp +
        myScore +
        " " +
        oppScore;
    }
  } else if (wildCardRound && wins > 11) {
    if (myScore > oppScore) {
      document.getElementById("wcRoundOpponent").innerHTML =
        "Wild Card Round: Winner " +
        wcOpponent.homeOpp +
        myScore +
        " " +
        oppScore;
    } else if (oppScore > myScore) {
      document.getElementById("wcRoundOpponent").innerHTML =
        "Wild Card Round: Loser " +
        wcOpponent.homeOpp +
        myScore +
        " " +
        oppScore;
    }
  } else if (divisionalRound && wins <= 13) {
    if (myScore > oppScore) {
      document.getElementById("divRoundOpponent").innerHTML =
        "Divisional Round: Winner " +
        divOpponent.roadOpp +
        myScore +
        " " +
        oppScore;
    } else if (oppScore > myScore) {
      document.getElementById("divRoundOpponent").innerHTML =
        "Divisional Round: Loser " +
        divOpponent.roadOpp +
        myScore +
        " " +
        oppScore;
    }
  } else if (divisionalRound && wins > 13) {
    if (myScore > oppScore) {
      document.getElementById("divRoundOpponent").innerHTML =
        "Divisional Round: Winner " +
        divOpponent.homeOpp +
        myScore +
        " " +
        oppScore;
    } else if (oppScore > myScore) {
      document.getElementById("divRoundOpponent").innerHTML =
        "Divisional Round: Loser " +
        divOpponent.homeOpp +
        myScore +
        " " +
        oppScore;
    }
  }
}
//////////////////////////////
let wcOpponent;
let divOpponent;
let champOpponent;
let sbOpponent;
function getPlayoffs() {
  let myTeam = myTeamObject;
  let wcOpponents = [];
  let divOpponents = [];
  let champOpponents = [];
  let sbOpponents = [];

  if (myTeam.conference === AFC) {
    wcOpponents = AFCTEAMS;
  } else if (myTeam.conference === NFC) {
    wcOpponents = NFCTEAMS;
  }

  wcOpponents = wcOpponents.filter((team) => team.name !== myTeam.name);
  shuffle(wcOpponents);
  divOpponents = wcOpponents.filter(
    (team) => team.name !== wcOpponents[0].name
  );
  shuffle(divOpponents);
  champOpponents = divOpponents.filter(
    (team) => team.name !== divOpponents[0].name
  );
  shuffle(champOpponents);

  if (wildCardRound && wins <= 11) {
    wcOpponent = wcOpponents[0];
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing on the road against the " +
      wcOpponent.name +
      " in the Wild Card Round! Click to advance!";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Wild Card Round: " + wcOpponent.roadOpp
    );
    week.id = "wcRoundOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (wildCardRound && wins > 11) {
    wcOpponent = wcOpponents[0];
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing at home against the " +
      wcOpponent.name +
      " in the Wild Card Round! Click to advance!";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Wild Card Round: " + wcOpponent.homeOpp
    );
    week.id = "wcRoundOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (divisionalRound && wins <= 13) {
    divOpponent = divOpponents[0];
    playWeekButton.innerHTML = "Play Divisional Round";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Divisonal Round: " + divOpponent.roadOpp
    );
    week.id = "divRoundOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (divisionalRound && wins > 13) {
    divOpponent = divOpponents[0];
    playWeekButton.innerHTML = "Play Divisional Round";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Divisonal Round: " + divOpponent.homeOpp
    );
    week.id = "divRoundOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (championshipRound && wins <= 13) {
    champOpponent = champOpponents[0];
    playWeekButton.innerHTML = "Play Conference Championship";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Conference Championship: " + champOpponent.roadOpp
    );
    week.id = "champOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (championshipRound && wins > 13) {
    champOpponent = champOpponents[0];
    playWeekButton.innerHTML = "Play Conference Championship";
    const week = document.createElement("p");
    const textnode = document.createTextNode(
      "Conference Championship: " + champOpponent.homeOpp
    );
    week.id = "champOpponent";
    week.appendChild(textnode);
    document.getElementById("schedule").prepend(week);
  } else if (superBowl) {
  }
}

//////////////logic for each game////////////

function weekOneResult() {
  decideWinner();
  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins = 1;
    displayLosses = 0;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayWins = 0;
    displayLosses = 1;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekTwoResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekThreeResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekFourResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekFiveResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekSixResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekSevenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    addLosses();
    displayLosses++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekEightResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekNineResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekTenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekElevenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekTwelveResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekThirteenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekFourteenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekFifteenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekSixteenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function weekSeventeenResult() {
  decideWinner();

  if (myScore > oppScore) {
    wins++;
    addWins();
    displayWins++;
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  } else if (oppScore > myScore) {
    losses++;
    displayLosses++;
    addLosses();
    myTeam2.innerHTML =
      chosenTeam + " " + displayWins + " " + "-" + " " + displayLosses;
  }
}

function wildCardResult() {
  decidePlayoffWinner();
  if (myScore > oppScore) {
    divisionalRound = true;
    wildCardRound = false;
    getPlayoffs();
    playWeekButton.innerHTML =
      "You have won the Wild Card Round! You are playing in the Divisional Round. Click to advance.";
    addWins();
  } else {
    addLosses();
    wildCardRound = false;
    endSeason = true;

    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    startNewSeasonButton.innerHTML =
      "You have lost in the Wild Card Round. Click to start the next season.";
    seasonSnip = "Lost Wild Card Round";
  }
}

function divisionalRoundResult() {
  getPlayoffs();
  if (myScore > oppScore) {
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
    console.log(count);
  if (count === 1) {
    weekOneResult();

    playWeekButton.innerHTML = "Click to play Week 2";
    count++;
  } else if (count === 2) {
    weekTwoResult();

    playWeekButton.innerHTML = "Click to play Week 3";
    count++;
  } else if (count === 3) {
    weekThreeResult();

    playWeekButton.innerHTML = "Click to play Week 4";
    count++;
  } else if (count === 4) {
    weekFourResult();

    playWeekButton.innerHTML = "Click to play Week 5";
    count++;
  } else if (count === 5) {
    weekFiveResult();

    playWeekButton.innerHTML = "Click to play Week 6";
    count++;
  } else if (count === 6) {
    weekSixResult();

    playWeekButton.innerHTML = "Click to play Week 7";
    count++;
  } else if (count === 7) {
    weekSevenResult();

    playWeekButton.innerHTML = "Click to play Week 8";
    count++;
  } else if (count === 8) {
    weekEightResult();

    playWeekButton.innerHTML = "Click to play Week 9";
    count++;
  } else if (count === 9) {
    weekNineResult();

    playWeekButton.innerHTML = "Click to play Week 10";
    count++;
  } else if (count === 10) {
    weekTenResult();

    playWeekButton.innerHTML = "Click to play Week 11";
    count++;
  } else if (count === 11) {
    weekElevenResult();

    playWeekButton.innerHTML = "Click to play Week 12";
    count++;
  } else if (count === 12) {
    weekTwelveResult();

    playWeekButton.innerHTML = "Click to play Week 13";
    count++;
  } else if (count === 13) {
    weekThirteenResult();

    playWeekButton.innerHTML = "Click to play Week 14";
    count++;
  } else if (count === 14) {
    weekFourteenResult();

    playWeekButton.innerHTML = "Click to play Week 15";
    count++;
  } else if (count === 15) {
    weekFifteenResult();

    playWeekButton.innerHTML = "Click to play Week 16";
    count++;
  } else if (count === 16) {
    weekSixteenResult();

    playWeekButton.innerHTML = "Click to play Week 17";
    count++;
  } else if (count === 17) {
    weekSeventeenResult();

    playWeekButton.innerHTML = "Season Over";
    count++;
  } else if (count === 18 && wins >= 9 && wins <= 13) {
    playWeekButton.innerHTML = "Play Wild Card Round!";
    count++;
  } else if (count === 18 && wins > 13) {
    playWeekButton.innerHTML = "Play Divisional Round!";
    count++;
  } else if (wildCardRound) {
    resultWC.style.display = "block";
    wildCardResult();
  } else if (divisionalRound && count !== 20) {
    playWeekButton.innerHTML = "Play Divisional Round!";
    count++;
  } else if (divisionalRound && count === 20){
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

function determinePlayoffs() {
  if (count === 18 && wins < 9 && !endSeason) {
    playWeekButton.style.display = "none";
    startNewSeasonButton.style.display = "block";
    startNewSeasonButton.innerHTML =
      "You have missed the playoffs. Click to start the next season.";
    seasonSnip = "Missed playoffs.";
    endSeason = true;
  } else if (count === 18 && wins >= 9 && wins <= 11 && !wildCardRound) {
    playoffsDiv.style.display = "block";
    wildCardRound = true;
    getPlayoffs();
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing on the road against the " +
      wcOpponent.name +
      " in the Wild Card Round! Click to advance!";
  } else if (count === 18 && wins > 11 && wins <= 13 && !wildCardRound) {
    playoffsDiv.style.display = "block";
    wildCardRound = true;
    getPlayoffs();
    playWeekButton.innerHTML =
      "You made the playoffs! You are playing at home against the " +
      wcOpponent.name +
      " in the Wild Card Round! Click to advance!";
  } else if (count === 18 && wins > 13 && !divisionalRound) {
    playoffsDiv.style.display = "block";
    divisionalRound = true;
    getPlayoffs();
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
  genWeek = 1;
  displayWins = "";
  displayLosses = "";
  myTeam2.innerHTML = chosenTeam;
  wildCardRound = false;
  divisionalRound = false;
  championshipRound = false;
  superBowl = false;
  while (schedule.firstChild) {
    schedule.removeChild(schedule.firstChild);
  }

  scoreButton.style.display = "block";

  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";

  playWeekButton.style.display = "block";
  playWeekButton.innerHTML = "Click to play Week 1";
  startNewSeasonButton.style.display = "none";
}

//////play week button
let playWeekButton = document.getElementById("playWeek");
playWeekButton.style.display = "none";
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
  genWeek = 1;
  while (schedule.firstChild) {
    schedule.removeChild(schedule.firstChild);
  }

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

  resultSB.style.display = "none";
  resultConfChamp.style.display = "none";
  resultDivis.style.display = "none";
  resultWC.style.display = "none";

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
