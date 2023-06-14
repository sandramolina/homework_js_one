## How to Play the Technology Guessing Game (TGG)

To play the Technology guessing game, follow these steps:

### Game Files

1. Ensure you have two files: `index.html` and `script.js`.

### Setup

1. Open the `index.html` file in a web browser.
2. Open the developer console in your browser's developer tools.

### Gameplay

1. The game will display an alert with a hint for the word you need to guess.
2. Look at the console to see the initial state of the word, represented by underscores.
3. Guess a letter by entering it in the prompt that appears.
4. The game will check if the letter has already been guessed or not:
   - If the letter has already been guessed, you will receive an alert indicating that you need to try again.
   - If the letter is a new guess, it will be added to the list of guessed letters.
5. The console will update to display the current state of the word, revealing any correctly guessed letters.
6. Repeat steps 3-5 until you have guessed all the letters in the word.
7. Once you have correctly guessed the word, an alert will appear, congratulating you and displaying the word you guessed correctly.
8. The game will end, and you can restart by refreshing the page.

Remember, the game will choose a random word from the list of technologies stored in the `technologies` array.

Have fun playing the Technology Guessing Game (TGG)!
