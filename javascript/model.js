//What is the data of this app?
//MVC resource https://www.taniarascia.com/javascript-mvc-todo-app/
/*
 - the words for the hangman game
 - how many wins the player have
 - how many losses the player have
 - the number of guesses

 https://coryrylan.com/blog/javascript-es6-class-syntax ***

 We use _ convention to create a backing field to store our name property. Without this every 
 time get or set is called it would cause a stack overflow. 

*/

class GameModel {
	constructor() {
		//List of hangman guesses for the game
		this._hangmanChoices = [
			'mario',
			'lugi',
			'browser',
			'peach',
			'toad',
			'yoshi',
			'daisy',
			'waluigi',
			'bowser',
			'koopalings',
		];

		this._guessWord = '';
		this._wordDisplay = [];
		this._lettersAlreadyGuessed = [];
		this._numGuessesRemain = 10;
		this._numWins = 0;
		this._numLoss = 0;
	}

	get hangmanChoices() {
		return this._hangmanChoices;
	}

	get guessWord() {
		return this._guessWord;
	}

	get wordDisplay() {
		return this._wordDisplay;
	}

	get lettersAlreadyGuessed() {
		return this._lettersAlreadyGuessed;
	}

	get numGuessesRemain() {
		return this._numGuessesRemain;
	}

	get numWins() {
		return this._numWins;
	}

	get numLoss() {
		return this._numLoss;
	}

	set hangmanChoices(word) {
		this.hangmanChoices = this._hangmanChoices.push(word);
	}

	set guessWord(randomWord) {
		return (this._guessWord = randomWord);
	}

	set wordDisplay(letter) {
		return (this._wordDisplay = letter);
	}

	set lettersAlreadyGuessed(letter) {
		this._lettersAlreadyGuessed.push(letter);
	}

	set numGuessesRemain(numberOfGuesses) {
		this._numGuessesRemain = numberOfGuesses;
	}

	set numWins(numberOfWins) {
		this._numWins = numberOfWins;
	}

	set numLoss(numberOfLoss) {
		this._numLoss = numberOfLoss;
		return this._numLoss;
	}
}

// const myModel = new GameModel();
// console.log(myModel.numLoss);

// myModel.numLoss = 1;
// console.log(myModel.numLoss);
// //console.log(myModel.hangmanChoices);

module.exports = GameModel;
