var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("welcome " + userName + " to DO YOU KNOW Tanjil? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase == answer.toUpperCase) {
    console.log("Right!");
    score = score + 1;
  }
  else {
    console.log("Wrong!");
  }
}
var highScores = [
  {name: "Tanjil", score: 3},
  {name: "Aafreen", score: 2},
]

var questions = [
  {
    A: "yes",
  },
  {
  Q: "Where do I work? ",
  A: "BraKetLab",
},
{
  Q: "Where do you leave? ",
  A: "pune",
},
{
  Q: "How old are you? ",
  A: 25,
}
];

for(i = 0; i < questions.length; i++)
{
  var currentQuestion = questions [i];
  console.log(play(currentQuestion.Q, currentQuestion.A));
}

function displayScore(){
  console.log("Yay! " + userName + " You scored ", score)
  highScores.map(score => console.log(score.name, " : ", score.score))
}

displayScore()