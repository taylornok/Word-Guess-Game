// Now for the Javascript! Here's a fun opener
// var userName = prompt("Oh, hello stranger!  Now what should I call you?");
// alert("Well hello " + userName + ", pleasure to meet you.")
// var question = confirm("Are you psychic?");
// if (question) {
//     alert("Well let's test your skills!")
// } else {
//     alert("Too bad, how about we pretend?")
// }


// Making variables for the game itself

// Create an array with words to be randomized - music themed
var wordList = ["Drake", "Beyonce", "Sam Smith", "Lil Wayne", "Ariana Grande", "Cardi B", "Migos", "The Weeknd", "Kendrick Lamar", "Post Malone", "Imagine Dragons", "Fleetwood Mac"];

// Randomize those words, 
var word = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase()
//Create blank answer array, define wins/losses/guesses
var answerArray = []
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var gameOver = false;

// Define user input as userGuess
document.onkeyup = function (event) {
    var userGuess = event.key;

    // Take the multi-character values in the wordList and split them into separate characters the comp. can recognize => letterArray
    var letterArray = word.split("");
    console.log(letterArray)

    //For loop to 
    for (var i = 0; i < letterArray.length; i++) {
        if (userGuess === letterArray[i]) {
            answerArray[i] = letterArray[i];
        } 
        else if (!answerArray[i]) {
            answerArray[i] = "_";
            guessesLeft -= 1;
            document.getElementById("winning").innerHTML = answerArray[i];
        }
        if (answerArray[i] === letterArray) {
            gameOver = true;
            wins = wins + 1;
            word = word[i + 1];
            alert("You win!");
        }

        // guessesLeft = guessesLeft - 1;

    }
    console.log("checking answer array", answerArray)

}
function start() {
    // determine amount of hashes and spaces and put into 
    // document.getElementById("winning").innerHTML
    // get the word, fill in answer array with underscores and spaces, loop through and append to html 
}

function endGame() {
    
}
// Create the blanks to fill in
// While (remainingLetters > ) {

// }

//  Start by identifying user input



//     console.log(event.key)
start()
// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     var randWord = gameWords[Math.floor(Math.random() * gameWords.length)];
//     for (i = 0; i < gameWords.length; i);