const Letter = function(letter) {
    
    this.letter = letter,
    this.guessed = false
};  

Letter.prototype.guessOrNot = function() {
    if (this.letter === " ") {
        this.guessed = true;
        return "   ";
    } else if (this.guessed === false) {
        return "_ ";
    } else if (this.guessed === true) {
        return this.letter;
    } 
}

Letter.prototype.compare = function(input) {
    if (input === this.letter) {
        this.guessed = true;
        if(this.letter === "_ ") {
            return this.letter;
        }
    } 
}

module.exports = Letter;
