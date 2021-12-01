var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("what is your name?");

console.log("Welcome"+userName+" to DO YOU KNOW MRINAL?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score = score +1;

  } else {
    console.log ("wrong!");
  }

console.log ("current score: ", score);
console.log ("-----------")
}

var questions = [{
  question: "where do i live ?",
  answer: "jamshedpur"
},{
  question: "My favorite sports would be?",
  answer: "football"
},{
  question: "my favorite superhero would be?",
  answer: "ironman"
}]; 

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);