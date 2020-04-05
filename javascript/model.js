//What is the data of this app?
/*
 - the words for the hangman game
 - how many wins the player have
 - how many losses the player have
 - the number of guesses

*/

class Model {
	constructor() {
		//List of hangman guesses for the game
		this.hangmanChoices = [
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

		this.numGuessesRemain = 10;
		this.numWins = 0;
	}

	get firstChoice() {
		return this.hangmanChoices[0];
	}
}

module.exports = Model;