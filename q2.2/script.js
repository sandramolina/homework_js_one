// I created an object called game that encapsulates the array of technologies and the game logic.
const game = {
  technologies: [
    {
      name: 'JavaScript',
      hint: 'Language created to add interactivity to the web',
    },
    {
      name: 'HTML',
      hint: 'Markup language for creating web pages',
    },
    {
      name: 'CSS',
      hint: 'Styling language for web pages',
    },
    {
      name: 'Python',
      hint: 'Versatile programming language known for its readability',
    },
    {
      name: 'Java',
      hint: 'Popular object-oriented programming language',
    },
    {
      name: 'React',
      hint: 'JavaScript library for building user interfaces',
    },
    {
      name: 'Node.js',
      hint: "JavaScript runtime environment built on Chrome's V8 engine",
    },
    {
      name: 'Git',
      hint: 'Version control system for tracking changes in code',
    },
    {
      name: 'SQL',
      hint: 'Standard language for relational database management systems',
    },
    {
      name: 'Docker',
      hint: 'Platform for building, packaging, and distributing applications',
    },
    {
      name: 'Ruby',
      hint: 'Dynamic, object-oriented programming language',
    },
    {
      name: 'C#',
      hint: 'General-purpose programming language by Microsoft',
    },
    {
      name: 'PHP',
      hint: 'Server-side scripting language for web development',
    },
    {
      name: 'Angular',
      hint: 'JavaScript framework for building web applications',
    },
    {
      name: 'MongoDB',
      hint: 'NoSQL database program using JSON-like documents',
    },
    {
      name: 'Swift',
      hint: 'Programming language for iOS, macOS, watchOS, and tvOS development',
    },
    {
      name: 'TensorFlow',
      hint: 'Open-source machine learning framework',
    },
    {
      name: 'Webpack',
      hint: 'Module bundler for JavaScript applications',
    },
    {
      name: 'Rust',
      hint: 'Systems programming language focused on safety, speed, and concurrency',
    },
    {
      name: 'TypeScript',
      hint: 'Typed superset of JavaScript that compiles to plain JavaScript',
    },
  ],

  // The getRandomIndex method generates a random index within the range of the technologies array.
  getRandomIndex: function () {
    return Math.floor(Math.random() * this.technologies.length);
  },

  // The pickRandomTechnology method selects a random technology object from the array.
  pickRandomTechnology: function () {
    const randomIndex = this.getRandomIndex();
    return this.technologies[randomIndex];
  },

  /*
  The playGame method handles the game loop and user interaction. It uses a while loop to iterate until the word is fully guessed. The inner while loop uses concatenation with the '+' operator to build the displayTechnology string (I have used a for loop for this previously). 
  */
  playGame: function () {
    // Pick a technology at the random index
    const randomTechnology = this.pickRandomTechnology();
    //Extract the number of the random technology
    const randomTechnologyName = randomTechnology.name.toLowerCase();

    // Array to store the guessed letters
    const guessedLetters = [];

    // The game starts with the alert - providing a hint
    alert(`Guess the tech, hint: ${randomTechnology.hint}`);

    while (true) {
      // Display the current state of the word
      let displayTechnology = '';
      let i = 0;

      while (i < randomTechnologyName.length) {
        if (guessedLetters.includes(randomTechnologyName[i])) {
          displayTechnology += randomTechnologyName[i];
        } else {
          displayTechnology += '_';
        }
        i++;
      }

      console.log(displayTechnology);
      // Check if the word is fully guessed
      if (displayTechnology === randomTechnologyName) {
        alert(
          `Congratulations! The word was ${randomTechnologyName} and you guessed it correctly.`
        );
        break;
      }
      // Get player's guess
      const guess = prompt('Guess a letter:');

      // Check if the letter is already guessed
      if (guessedLetters.includes(guess)) {
        alert('You already guessed that letter. Try again.');
        continue;
      }

      // Add the guessed letter to the array
      guessedLetters.push(guess.toLowerCase());
    }
  },
};

// Starts the game
game.playGame();
