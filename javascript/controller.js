/*

 **** where model + view talk to one another ****

*/


class Controller {
    constructor(model, view, service) {
        this.model = model;
        this.view = view;
        this.service = service;

        //initial guess word for the game
        //hangmanGuessWord call from gameModifierServices.js
    }

    //set initial game stats for the game
    setGameText(gameModel, gameView) {
        this.view.setElement(this.view.title, 'HangMan Mario');
        this.view.setElement(this.view.wordDisplayHTML, `Current Word: ${this.view.wordDisplay.join(' ')}`);
        this.view.setElement(this.view.numberGuessHTML, `Number of Guesses Remaining ${this.view.numGuessesRemain}`);
        this.view.setElement(
            this.view.lettersAlreadyGuessedHTML,
            `Letters Already Guessed ${this.view.lettersAlreadyGuessed}`
        );
        this.view.setElement(this.view.winElm, `Wins ${this.view.numWins}`);
    }

    //takes a view and append html element to the app setup game view
    setupGameBoard(gameView) {
        this.view.appendElement(this.view.app, this.view.title);
        this.view.appendElement(this.view.app, this.view.wordDisplay);
        this.view.appendElement(this.view.app, this.view.numberGuessHTML);
        this.view.appendElement(this.view.app, this.view.lettersAlreadyGuessedHTML);
        this.view.appendElement(this.view.app, this.view.winElm);
    }

    // gameLogic(this.model) {
    //     document.addEventListener('keydown', function (event) {
    //         let keyPressed = event.key;
    //         gameService.handleInput(keyPressed, this.model);
    //     });
    // }

    /*
        1. Setup hangman game board game
            -dom elements
            -choose a word
            -run placeGenerator _ _ _ _
            -test the letter checker function in gameModifer
            -test handle userinput
            -checkWinOrLoose function
            -run handleInput
        2. create startOver in GameModifer

        ! Handle Input test
       // ! Add event listenr to controller document onkeyup
        !Figure out how to work with gameModiferService Layer


    */
}

const Model = require('./model');
const View = require('./view');
const Service = require('./gameModiferService');

const testView = new Controller(Model, View, Service);
testView.setGameText(Model, View)
testView.setupGameBoard(View)
// console.log(testView.setupGameBoard('ho!'));
// const app = new Controller(new Model(), new View())

module.exports = Controller;