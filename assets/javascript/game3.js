//variable
var wins = 0;
var numGuessRemain = 15;
var lettersAlreadyGuessed = [];

// Creates an array that lists out all of the options.
//this does not work with the same letter in different indices
var hangmanChoices = ["kanye", "cardib","tink","twista","madonna"];

//create a random generator for the hangman word
var hangmanWord = hangmanChoices[Math.floor(Math.random() * hangmanChoices.length)];
console.log(hangmanWord)

var hangmanPlacementholders = [];

for(var i = 0; i< hangmanWord.length; i++){
	hangmanPlacementholders.push("_");       
	
}

//user press enter to play game function

document.onkeyup=function(e) {
	var startKey = e;
	if (startKey.keyCode === 13) {
		console.log("Game is starting");
		document.onkeyup=function(event) {
			var keyPressed = event.key.toLowerCase();
			var message = '';
			// if keyPressed is correct. Uppercased to make it case insensitive
			if (hangmanWord.includes(keyPressed)) {
				var charIndex = hangmanWord.indexOf(keyPressed);
				var indicesOfKeyPressed = [];
				for (var i = 0; i < hangmanWord.length; i++) {
				    if (hangmanWord[i] === keyPressed) indicesOfKeyPressed.push(i);
				}
				message = "You guessed " + indicesOfKeyPressed.length + " of em.";
				
				// change indeces of hangmanPlacementholders if it matches keyPressed
				for (var i = 0, len = indicesOfKeyPressed.length; i < len; i++) {
					hangmanPlacementholders[indicesOfKeyPressed[i]] = keyPressed;
				}
			} else {
				message = "Try Again. You're Wack";
			};

			lettersAlreadyGuessed.push(keyPressed)
			numGuessRemain--;
			console.log(message);
			console.log('Letters Guessed: ' + lettersAlreadyGuessed);
			console.log('Guesses Remaining: ' + numGuessRemain);
			console.log('Progress: ' + hangmanPlacementholders);
			if (hangmanPlacementholders.join("") == hangmanWord) {
				alert('WE GOT A WINNER!!! Refresh and press ENTER to play again');
			}
		};
	};
};