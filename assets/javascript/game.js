


//variable
var hangmanWord;
var wins;
var numGuessRemain;
var lettersAlreadyGuessed;

//user press enter to play game function

 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var hangmanChoices = ["madonna", "kanye", "cardib","tink","twista"];

    //create a random generator for the hangman word
    var computerWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];

    var gameWord = hangmanChoices[computerWord];
    //use the length of the word to loop through and create underscore blank spaces
    function placeHolder(){
      for(var i = 0 ; i<computerWord.length;i++){
          document.write("<div class='letterPlaceHolder' ></div>");
      }
    }

    placeHolder();

    //

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var numGuessRemain = 15;

    //not sure if this variable is needed... we can just append the document to show the letters
    var lettersAlreadyGuessed = [];


    //functions

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;


      // Only run the following code block if the user presses "r" or "p" or "s".
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    };


    //main logic, startup code