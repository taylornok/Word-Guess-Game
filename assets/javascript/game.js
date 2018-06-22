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
var displayWord = makeDisplayWord(word);
var guessedLetters = [];


function makeDisplayWord (gameWord) {
    var temp = [];
    for (var i = 0; i< gameWord.length; i++) {
        temp[i] = "_";
        
    }
    return temp;
}
function endgameLose(){
    document.getElementById("winning").textContent = word;
    var gameMessage = document.createElement("h2");
    var messageText = document.createTextNode("You Lost");
    gameMessage.appendChild(messageText);
    document.getElementById("winning").appendChild(gameMessage);
    // gameMessage.textContent = ("You Lost")
}
function endgameWin (){
    document.getElementById("winning").textContent = word;
    var gameMessage = document.createElement("h2");
    var messageText = document.createTextNode("You Won");
    gameMessage.appendChild(messageText);
    document.getElementById("winning").appendChild(gameMessage);
}

function addWin (){
    var wins = [];
    wins ++;
    document.getElementById("guessWin").textContent = wins
    
}
function addLoss (){
    var losses = [];
    losses ++;
    document.getElementById("gameLost").textContent = losses
}
// Define user input as userGuess
document.onkeyup = function (event) {
    var userGuess = event.key;

    // Take the multi-character values in the wordList and split them into separate characters the comp. can recognize => word
    
    console.log(word);
    function gameStart(){

        if (guessedLetters.indexOf(userGuess) === -1){
            guessedLetters.push(userGuess);
            if(word.includes(userGuess)){
            //For loop to 
                for (var i = 0; i < word.length; i++) {
                    if (userGuess === word[i]) {
                        displayWord[i] = word[i];
                    }
                    


                    

                }
            }
            else{
                guessesLeft -- ;
            } 
        }
            document.getElementById("winning").textContent = displayWord.join(" ");
            document.getElementById("guessesLeft").textContent = guessesLeft;
            document.getElementById("guess").textContent = userGuess;
    
         console.log("checking answer array", answerArray)
    }
    gameStart();    
    if (guessesLeft === 0) {
        endgameLose();
        addLoss();
    }
    if (displayWord === word[i].length){
        endgameLose();
        makeDisplayWord();
    }


}


