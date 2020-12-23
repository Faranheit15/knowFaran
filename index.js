var readlineSync = require ("readline-sync");

var score=0;

var userName = readlineSync.question("Bonjour stranger! Please enter your name : ");
console.log("Hello "+userName+", welcome to DO YOU KNOW FARAN");
console.log("NOTE: The quiz is case-sensitive")
console.log();

function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("✅ Correct! Yaay!");
    score+=1;
  }
  else{
    console.log("❌ Wrong!");
    score-=1;
  }
  console.log(userName+", your current score is "+score);
  console.log("______________________________________");
}

var answerArray=[
  {
    question:"What is Faran's surname? ",
    answer:"Mohammad"
  },
  {
    question:"What is his native city? ",
    answer:"Gorakhpur"
  },
  {
    question:"Where does he study? ",
    answer:"Integral University"
  },
  {
    question:"How old is he? ",
    answer:"21"
  },
  {
    question:"What is his favourite band? ",
    answer:"Imagine Dragons"
  },
]

for(var i=0;i<answerArray.length;i++){
  var currentQuestion=answerArray[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("You scored "+score+" out of "+(answerArray.length));