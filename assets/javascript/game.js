
// Greeting<script>
var userName = prompt("What's your name?");
    alert ("Hello " + userName )
var question = confirm("Are you psychic?");
    if (question) {
        alert("Well let's test your skills!")
    }
    else {
        alert("Too bad, how about you pretend?")
    }
// Make your variables
var gameWords = ["Drake", "Beyonce", "Sam Smith", "Lil Wayne", "Ariana Grande", "Cardi B", "Migos", "The Weeknd", "Kendrick Lamar", "Post Malone", "Imagine Dragons", "Fleetwood Mac"];
var guessLeft = 10;
var wins = 0;
var losses = 0;

// document.onkeyup = function(event) {
//     var userGuess = event.key;
//     var randWord = gameWords[Math.floor(Math.random() * gameWords.length)];
//     for (i = 0; i < gameWords.length; i);
