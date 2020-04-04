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
	}

	get firstChoice() {
		return this.hangmanChoices[0];
	}
}

module.exports = Model;
