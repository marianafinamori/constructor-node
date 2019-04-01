var Letter = require("./Letter.js");

var Word = function(randomWord) {
    this.wordArray = [];
    this.city = [];
    this.word = "";

    
    for (var i = 0; i < randomWord.length; i++) {
        var letter = new Letter(randomWord[i]);
        this.wordArray.push(letter);
        this.city.push(letter.letter); 
    }

this.buildWord = function() {
    this.word = "";
        for (var i = 0; i < this.city.length; i++) { 
        this.word+=this.wordArray[i].guessOrNot();
        }
    // return this.word;
    console.log(this.word);
}

//  d. a function that takes a character as an argument and calls the guess function on each letter object 
//(the 2nd function defined in Letter.js)

this.checkWord = function(input) {
    for (var i = 0; i < this.wordArray.length; i++) {
        //this.city[i] is just a character
        //this.wordArray[i] is the whole Letter object
        //so you might have to change this up
        // this.word[i].compare(input);
        this.wordArray[i].compare(input);

    }
}
}

module.exports = Word;



