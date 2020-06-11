const Letter = require("./Letter.js");

const Word = function(artist) {
    this.lettersObjectArray = [];
    this.nameIntoArray = [];
    this.word = "";

    Array.from(artist).forEach(eachLetter => {
        let nameLetterObject  = new Letter(eachLetter);
        this.lettersObjectArray.push(nameLetterObject);
        this.nameIntoArray.push(nameLetterObject.letter); 
        // console.log("this.nameLetterObjectArray: " + JSON.stringify(this.nameLetterObjectArray))
        // console.log("this.nameIntoArray " + this.nameIntoArray)
    })   
}

Word.prototype.buildWord = function() {
    this.word = "";
        this.lettersObjectArray.forEach(letterObject => {
            this.word+=letterObject.guessOrNot()
        })
    console.log(this.word);
}

Word.prototype.checkWord = function(input) {
    this.lettersObjectArray.forEach(eachLetter => {
        eachLetter.compare(input)
    })
}

module.exports = Word;



