
// Array or word options(lowercase)

var words = ["rocket", "gamora", "drax", "nebula", "yondu", "groot",
  "quill", "collector", "galaxy", "guardians", "mantis", "thanos"
];

// computer selected word. 
var chosenWord = "";
// break the selected word into letters to be stored in array.
var lettersInWord = [];
//  the number of blanks we show based on the solution.
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'f_ o, _').
var Guesses = [];

// array of incorrect letters
var wrongGuesses = [];

// Holds the letters guessed
var letterGuessed = "";

//  counters
var wins = 0;
var loss = 0;
var guessesLeft = 9;

function startGame() {
  guessesLeft = 5;
  // choses random word from words list.
  chosenWord = words[Math.floor(Math.random() * words.length)];
// The word is broken into individual letters.
  lettersInWord = chosenWord.split("");
  // count the number of letters in the word.
  numBlanks = lettersInWord.length;
  console.log(chosenWord);
// reset the guess and success array at each round.
  Guesses = [];
  // reset the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the guesses list with appropriate number of blanks per letter 
  for (var i = 0; i < numBlanks; i++) {
    Guesses.push("_");
  }


  console.log(Guesses);

  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("word-blanks").innerHTML = Guesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// comparisons for matches
function checkLetters(letter) {

  // whether or not
  // a user letter is found anywhere in the word
  var letterInWord = false;
// Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {
      
      // If the letter exists then boolean to true.
      
      letterInWord = true;
    }
  // }
  // / If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {
     // Loop through the word
    for (var j = 0; j < numBlanks; j++) {
      // Populate the "_" in guesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        
        //  set specific blank spaces to equal the correct letter
        // when a match.
        Guesses[j] = letter;
      }
    }
    console.log(Guesses);
    // if letter is not in the word at all aka wrong letter.
    // The letter gets put into the wrongGuesses array
  } else {
    wrongGuesses.push(letter);
    guessesLeft--;

  }

}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("word-blanks").innerHTML = Guesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If user answers all the correct letters.
 
  if (lettersInWord.toString() === Guesses.toString()) {
// add to the win count
    wins++;
    document.getElementById("win-counter").innerHTML = wins;
// else add to the loss count when there are no more guesses left aka guessesleft = 0
    startGame();
  } else if (guessesLeft === 0) {
    loss++;

    document.getElementById("loss-counter").innerHTML = loss;
    startGame();

  }

}
// function execution for starting the game. 
startGame();
// captures the user clicks on the keys
document.onkeyup = function (event) {
  // converts keys to lower case
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // execution for checking the correct guess
  checkLetters(letterGuessed);
  // executes the completed round function 
  roundComplete();
};