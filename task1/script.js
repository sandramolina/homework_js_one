const technologies = [
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
];

// Generate a random index within the range of the array
const randomIndex = Math.floor(Math.random() * technologies.length);

// Pick a technology at the random index
const randomTechnology = technologies[randomIndex];

//Extract the number of the random technology
const randomTechnologyName = randomTechnology.name.toLocaleLowerCase();

// Array to store the guessed letters
const guessedLetters = [];

// The game starts with the alert - providing a hint
alert(`Guess the tech, hint: ${randomTechnology.hint}`);
// Game loop
while (true) {
  // Display the current state of the word
  let displayTechnology = '';
  for (let i = 0; i < randomTechnologyName.length; i++) {
    if (guessedLetters.includes(randomTechnologyName[i])) {
      displayTechnology += randomTechnologyName[i];
    } else {
      displayTechnology += '_';
    }
  }
  console.log(displayTechnology);

  // Check if the word is fully guessed
  if (displayTechnology === randomTechnologyName) {
    alert(
      `Congratulations! The word was ${randomTechnologyName} ands you guessed it correctly.`
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
  guessedLetters.push(guess.toLocaleLowerCase());
}
