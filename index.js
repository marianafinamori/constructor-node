
const inquirer = require("inquirer");
const Word = require("./Word.js");

const artists = ["PABLO PICASSO", "SALVADOR DALI", "JOAN MIRO", "EGON SCHIELE", "LOUISE BOURGEOIS", "ANDY WARHOL", "JEAN MICHEL BASQUIAT", "JACKSON POLLOCK", "CAMILLE CLAUDEL", "FRANCIS BACON", "WILLEM DE KOONING", "MARK ROTHKO", "EDWARD HOPPER", "MARLENE DUMAS", "FRIDA KAHLO"];
let lettersToGuess;
let triesLeft;
let wrongGuesses;
let statusArray = [];


init();
function init() {
inquirer
  .prompt([
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
      console.log("\nBYE!\n");
    }
  });
}

function gameStatus() {
  if (statusArray.indexOf(false) > -1 && triesLeft > 0) {
    play();
  } else if (triesLeft === 0) {
    console.log("**********************************************************")
    console.log("YOU LOST")
    console.log("The answer was: " + word.nameIntoArray.join(" ").toUpperCase());
    console.log("**********************************************************")
    playAgain();
  } else if (statusArray.indexOf(false) < 0) {
    console.log("**********************************************************")
    console.log("YOU WIN!")
    console.log("Good job guessing  " + word.nameIntoArray.join(" ").toUpperCase());
    console.log("**********************************************************")
    playAgain();
  }
}


function start() {
    let random = Math.floor(Math.random() * artists.length);
    let artist = artists[random];
    if (artist.indexOf(" ") > -1) { 
    lettersToGuess = artist.length - 1;
  } else {
    lettersToGuess = artist.length
  }
    triesLeft = 10;
    wrongGuesses = [];
    word = new Word(artist);
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
            name: "guest"
        }
    ])
    .then(function(inquirerResponse) {
        var input = inquirerResponse.guest.toUpperCase();
        // console.log("inquirerResponse: " + JSON.stringify(inquirerResponse))
        // console.log("console.log input " + input)
        
          if (word.nameIntoArray.indexOf(input) > -1) {
            lettersToGuess--;
            word.checkWord(input);
            console.log(" ")
            word.buildWord();
            console.log(" ")
            console.log("CORRECT")
            console.log("TRIES LEFT: " + triesLeft);
            console.log("WRONG LETTERS SO FAR: " + wrongGuesses.join(" "));
            statusArray = []
            word.lettersObjectArray.forEach(letterObjectArray => {
              statusArray.push(letterObjectArray.guessed)
            })
            gameStatus();
          } else if (wrongGuesses.indexOf(input.toUpperCase()) < 0) {
            statusArray = []
            word.lettersObjectArray.forEach(letterObjectArray => {
              statusArray.push(letterObjectArray.guessed)
            })
            triesLeft--;
            wrongGuesses.push(input.toUpperCase())
            console.log(" ")
            word.buildWord();
            console.log(" ")
            console.log("WRONG GUESS")
            console.log("TRIES LEFT: " + triesLeft);
            console.log("WRONG LETTERS SO FAR: " + wrongGuesses.join(" "));
            gameStatus();
        }  else {
          console.log(" ")
          word.buildWord();
          console.log(" ")
          console.log("YOU ALREADY TRIED " + input.toUpperCase())
          console.log("TRIES LEFT: " + triesLeft);
          console.log("WRONG LETTERS SO FAR: " + wrongGuesses.join(" "));
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
            console.log("\nBYE!\n");
          }
        });
      }
      
 



