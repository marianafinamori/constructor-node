# constructor-node
REQUIREMENTS
- Build a word guess command-line game using constructor functions. The solution should have, at minimum, three files. Letter.js (letters constructor), Word.js (work constructor) and index.js (main file with game logic)

TECHNOLOGIES
- Javascript
- Node.js
- npm inquirer

CODE EXPLANATION

    1. File Letter.js. 
    - Contains character constructor for the word-to-be-guessed. This constructor is able to either display a underlying character or a placeholder (in this case underscore), depending on whether or not the user has guessed the letter. This constructor defines:
    - a string value to store the underlying character for the letter
    - a boolean value that stores whether the letter has been guessed yet (false for not guessed, true for guessed)
    - a function that returns the underlying character if the letter has been guessed or underscore if not
    - a function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    
    2. File Word.js.
    Contains a constructor Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. This constructor defines:
    - an array of new Letter objects representing the letters of the underlying word
    - a function that returns a string representing the word. This function calls the function on each letter object in the Letter.js file that displays the character or an underscore and concatenate those together. 
    - a function that takes a character as an argument and calls the guess function on each letter object in the Letter.js file.
    
    3. File index.js
    - contains the logic for the course of the game, which depends on Word.js 
    - randomly selects a word and uses the Word constructor to store it
    - uses npm inquirer package to prompt the user for each guess and confirmation if user wants to play
    - keeps track of the user's remaining guesses 
