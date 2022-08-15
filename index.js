var readlineSync = require('readline-sync');
var chalk = require('chalk');

const right = chalk.green.bold;
const wrong = chalk.red.bold;
let score = 0;
const highscore = ["Disha", "Rashmi", "Raje"];
console.log(chalk.underline.black.bgRgb(66, 242, 245)("Hey! Welcome to the Quiz Game \n"));
username = readlineSync.question(chalk.yellowBright.bold("What's your name? \n"));
console.log(chalk.black.bgRgb(167, 66, 245)("\nWelcome " + username + "! Do you know Divya?\n"));

const game = [
  {
    question: "What is my favourite Pet?\n ",
    answer: "Dog"
  },
  {
    question: "What is my favourite Game?\n ",
    answer: "Badminton"
  },
  {
    question: "What is my favourite Food?\n ",
    answer: "Palak Paneer"
  },
  {
    question: "What is my hobby?\n ",
    answer: "Drawing"
  },
  {
    question: "Which is my favourite song?\n",
    answer: "Locked Away"
  }
]

for (var i = 0; i < game.length; i++) {
  play(i + 1, game[i].question, game[i].answer);
}

console.info(chalk.underline.bold("Final score -  " + score));

if (score == 5) 
{
console.info(chalk.bold.black.bgRgb(3, 252, 252)("\nCongratulations "+username+", you got all answers right and are one of the highscorer.\n"));
highscore.push(username);
}

console.info(chalk.bold("\nHighscores"));
for(var i = 0; i <highscore.length; i++) {
      console.log(chalk.yellowBright.bold("\n "+highscore[i]+"\t\t\t"+"5"));
}

function play(i, ques, ans) {
  var userAns = readlineSync.question(chalk.white.bold(i + "." + ques));
  if (ans.toLowerCase() == userAns.toLowerCase()) {
    console.log(right("\nRight!"));
    score++;
  }
  else {
    console.log(wrong("\nWrong!\n"));
    console.info(chalk.greenBright("The correct answer is " + game[i - 1].answer));
  } console.info("Score - " + score + "\r\n");
}





//Extra trail code


/* var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome "+userName)


var score = 0;
var readlineSync = require('readline-sync');
var age = readlineSync.question("Am I older than 25 ?")
anwser = "yes"
if (age === anwser) {
  console.log("Right");
  score = score + 1;
  console.info("Score is:" + score)
}
else {

  console.log("Wrong");
  score = score - 1;
  console.info("Score is:" + score)
}


function add(num1, num2) {
  var output = num1 + num2;
  return output;
}

console.log("Result - " + add(2, 3));
add(2,3);
for( var i = 0; i<5; i++){
  for(var j = i; j<5;j++){
  console.log("*");
  }
}
var string = "";
for (var i = 0; i < 5; i++) {
  string += "\n";
  for (var j = 0; j <= i; j++) {
    string += "*";
  }
}
console.log(string);


var number = 22;
for (var i = 1; i < 11; i++) {
  console.info(i * number);
}


var arrayName = ["valueOne", "valueTwo", "valueThree"];
var arrayName = [valueOne, valueTwo, valueThree];
console.log(arrayName[0])
arrayName.map((x) => {
  console.info(x);
})

var batman = {
  name: "batman",
  power: "flight",
  costume: "blue",
  strength: 100000,
  stealth: 0,
  intelligence: 100,
}

var superman = {
  name: "superman",
  power: "martial arts",
  costume: "black",
  strength: 1000,
  stealth: 100,
  intelligence: 100,
}


var superHero = [batman, superman]

for (let i = 0; i < superHero.length; i++) {
  console.info(superHero[i].name+" "+superHero[i].costume);
  console.log("--------------------")
}*/