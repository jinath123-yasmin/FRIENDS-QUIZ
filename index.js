var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.redBright;

log(chalk.blueBright.bold('Friend Quiz:', chalk.underline('The Ultimate FRIENDS Trivia Quiz\n')));

log(chalk.hex('#EE8800').underline("How much do you know about Rachel,Ross,Monica,Chandler,Phoebe and Joey? Find out by taking this FRINDS quiz!\n"));

log(chalk.blueBright.bold("Let's go!\n"));

function friends(question,answer){
var userAnswer =readlineSync.question(chalk.red (question));

var score=0;
	
  if(userAnswer === answer){
  log(chalk.blueBright.bold("Right!\n"));
  score=score+2;
}else {
  log(chalk.blueBright.bold("Wrong!"));
  log(error("Try Next Question!\n"));
  score=score-2;
}
}

var questions=[{
  question: 
 " In which city is Friends set \na: Los Angeles \nb: New York City \nc: Miami \nd: Seattle\n answer:  " ,
 //console.log(chalk.blueBright(`answer: ${answer}`));
  answer: "a",
},

{
     question: "What's the name of the coffee shop used by the character? \na:St Jame\'s Perk \nb: Central perk \nc: Froth of khan \nd: Daily Grind\n answer:  ",
     answer: "c"},
     {
       question: "What instrument does Phoebe Buffay play? \na: Drums \nb: Guitar \nc: Flute \nd: Synthesiser\n answer:  ",
       answer: "a"
     },
      {
       question: "What is the name of Rachel's haieless cat?  \na: Baldy \nb: Whiskerson \nc: Sid \nd: Felix\n answer:  ",
       answer: "c"
     },
    {
       question: "What is the name of Rachel's haieless cat?  \na: Baldy \nb: Whiskerson \nc: Sid \nd: Felix\n answer:  ",
       answer: "b"
     },

];

for(var i=0;i<questions.length;i++ ){
  var currentQuestion= questions[i];
  friends(currentQuestion.question,currentQuestion.answer);
}

log(chalk.bold.hex('#EE8800').underline("Score Board"));

var score=0;

var highScore = [
  {
    quizScore: 6
  },
  {
    quizScore: 8
  },{
    quizScore: 9
  },{
    quizScore: 10
  }
];

for(var i=0;i<highScore.length ;i++){
  var currentScore = highScore[i];

  if(currentScore.quizScore > score){
    score =currentScore.quizScore;
  }
}

log(chalk.blue("Highest Score: "+score));





