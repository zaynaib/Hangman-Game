//import view

const View = require('./model')
//create view

class GameViewService {
    constructor() {}

    //set game elements
    setGameText(gameView) {
        gameView.setElement(gameView.title, 'HangMan Mario');
        gameView.setElement(gameView.wordDisplayHTML, 'Current Word:')

    }


    //takes a view and append html element to the app setup game view
    setupGameBoard(gameView) {

    }




}