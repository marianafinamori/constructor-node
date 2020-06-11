CONSTRUCTOR NODE

It is a classic hangman game. The user will guess letters of an artist name until win or run out of tries. 

TECHNOLOGIES
- Javascript
- Node.js
- npm inquirer

CODE EXPLANATION
    The game is to be playing in the command-line.
    
    1. File Letter.js. 
    - Contains character constructor for the word-to-be-guessed. 
    
    2. File Word.js.
    Contains a constructor Word that requires the Letter constructor. This is used to create an object 
    representing the current word the user is attempting to guess.
    
    3. File index.js
    - contains the logic for the course of the game, which depends on the Word constructor
    - randomly selects an artist and uses the Word constructor to store it
    - uses npm inquirer to prompt the user for each guess and confirmation if user wants to play
    - keeps track of the user's remaining guesses


INSTALLATION
- download file
- run "node index" in the command-line
