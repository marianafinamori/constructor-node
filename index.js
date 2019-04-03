
var inquirer = require("inquirer");
var Word = require("./Word.js");

var words = ["pablo picasso", "salvador dali", "joan miro", "egon schiele", "louise bourgeois", "andy warhol", "jean michel basquiat", "jackson pollock", "camille claudel", "francis bacon", "willem de kooning", "mark rothko", "edward hopper", "marlene dumas", "frida kahlo"];
var lettersToGuess;
var triesLeft;
var wrongGuesses;
var statusArray = [];


init();
function init() {
inquirer
  .prompt([
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Do you want to guess the name of an artist?",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      start();
    } else {
      console.log("\nTHAT'S OKAY.\n");
    }
  });
}

function gameStatus() {
  if (statusArray.indexOf(false) > -1 && triesLeft > 0) {
    play();
  } else if (triesLeft === 0) {
    console.log("**********************************************************")
    console.log("YOU LOST")
    console.log("The answer was: " + word.city.join(" ").toUpperCase());
    console.log("**********************************************************")
    playAgain();
  } else if (statusArray.indexOf(false) < 0) {
    console.log("**********************************************************")
    console.log("YOU WIN!")
    console.log("Good job guessing  " + word.city.join(" ").toUpperCase());
    console.log("**********************************************************")
    playAgain();
  }
}


function start() {
    var random = Math.floor(Math.random() * words.length);
    var randomWord = words[random];
    if (randomWord.indexOf(" ") > -1) { 
    lettersToGuess = randomWord.length - 1;
  } else {
    lettersToGuess = randomWord.length
  }
  // console.log("letters to guess" + lettersToGuess);
    triesLeft = 10;
    wrongGuesses = [];
    word = new Word(randomWord);
    // console.log(word);
    console.log(" ")
    word.buildWord();
    console.log(" ");
    console.log("TRIES LEFT: " + triesLeft);
    console.log("WRONG LETTERS SO FAR: " + wrongGuesses);
    play();
}



function play() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "letter"
        }
    ])
    .then(function(inquirerResponse) {
        var input = inquirerResponse.letter;
        // console.log("console.log input " + input)
        
          if (word.city.indexOf(input) > -1) {
            lettersToGuess--;
            // console.log(lettersToGuess);
            word.checkWord(input);
            console.log(" ")
            word.buildWord();
            console.log(" ")
            console.log("CORRECT")
            console.log("TRIES LEFT: " + triesLeft);
            console.log("WRONG LETTERS SO FAR: " + wrongGuesses);
            statusArray = []
            for (var i = 0; i < word.wordArray.length; i++) {
              statusArray.push(word.wordArray[i].guessed)
            }
            // console.log("Updated array " + statusArray)
            gameStatus();
          } else {
            statusArray = []
            for (var i = 0; i < word.wordArray.length; i++) {
              statusArray.push(word.wordArray[i].guessed)
            }
            triesLeft--;
            wrongGuesses.push(input)
            console.log(" ")
            word.buildWord();
            console.log(" ")
            console.log("WRONG GUESS")
            console.log("TRIES LEFT: " + triesLeft);
            console.log("WRONG LETTERS SO FAR: " + wrongGuesses);
            gameStatus();
        }  
      }) 
    }


    function playAgain() {
      inquirer
        .prompt([
          // Here we ask the user to confirm.
          {
            type: "confirm",
            message: "Do you want to play again?",
            name: "confirm",
            default: true
          }
        ])
        .then(function(inquirerResponse) {
          if (inquirerResponse.confirm) {
            start();
          } else {
            console.log("\nTHAT'S OKAY.\n");
          }
        });
      }
 



