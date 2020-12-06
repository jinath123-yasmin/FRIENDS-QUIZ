var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.redBright;


var userName=readlineSync.question(chalk.hex('#FBBF24').bold('Whats your name? '));
console.log(chalk.blueBright.bold('\nHello! ' + userName + ' \nWelcome To F.R.I.E.N.D Quiz:', chalk.underline('The Ultimate FRIENDS Trivia Quiz\n')));


log(chalk.hex('#FBBF24').underline.bold("Send a screenshot to the admin of your score, if you beat the previous highest score\n"));

log(chalk.blueBright.bold("Let's go!\n"));


var score=0;
function friends(question,answer){
var userAnswer =readlineSync.question(chalk.red (question));
	
  if(userAnswer === answer){
   score= score+2; 
  log(chalk.blueBright.bold("Right!"));
  log(chalk.blueBright.bold("Score: "+score));
}else {
  log(chalk.blueBright.bold("Wrong!"));
  log(error("Try Next Question!\n"));
}
}

var questions=[{
  question: 
 " In which city is Friends set \na: Los Angeles \nb: New York City \nc: Miami \nd: Seattle\n answer:  " ,
  answer: "b",
   },{
     question: "What's the name of the coffee shop used by the character? \na:St Jame\'s Perk \nb: Central perk \nc: Froth of khan \nd: Daily Grind\n answer:  ",
     answer: "b"},
     {
       question: "What instrument does Phoebe Buffay play? \na: Drums \nb: Guitar \nc: Flute \nd: Synthesiser\n answer:  ",
       answer: "b"
     },
      {
       question: " How many seasons of the show are there? \na: 10 \nb: 9\nc: 7 \nd: 6\n answer:  ",
       answer: "a"
     },
    {
       question: "What is the name of Rachel's haieless cat?  \na: Baldy \nb: Whiskerson \nc: Sid \nd: Felix\n answer:  ",
       answer: "b"
     },
     {
       question: "It’s the first episode and Rachel has run away from her wedding. What was the name of the man she was going to marry?   \na: Baldy \nb: Whiskerson \nc:  Ross \nd: Barry\n answer:  ",
       answer: "d"
     },{
       question: "How many sisters does Joey have?   \na: 5 \nb: 6 \nc: 7 \nd: 2\n answer:  ",
       answer: "c"
     },{
       question: "How many times has Ross been married?   \na: 1 \nb: 3 \nc: 2 \nd: 4\n answer:  ",
       answer: "b"
     },{
       question: "What’s Phoebe’s sister’s name?   \na: Ariel \nb: Ursula \nc:  Janice \nd: Monica\n answer:  ",
       answer: "b"
     }

];

for(var i=0;i<questions.length;i++ ){
  var currentQuestion= questions[i];
  friends(currentQuestion.question,currentQuestion.answer);
}

log(chalk.bold.hex('#EE8800').underline("Score Board"));

var highScore = [
  {
    quizScore: 12
  },
  {
    quizScore: 16
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





