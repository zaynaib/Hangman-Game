/*

 **** where model + view talk to one another ****

 Use key events to listen for the letters that your players will type.

calculate the number of guesses
calculate the number of wins


*/

const Model = require('./model');
const View = require('./view')
class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    selectHangmanWord(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    placeGenerator(word) {

        let placeholders = [];

        for (let letter of word) {
            placeholders.push("_")
        }
        return placeholders;
    }

    //game play steps

    /*

    - play can guess a letter right
    - can guess a letter wrong
    - can play the same letter


    */

    /*

    did the player win

    */

    /*
     
    did the player loose

    */

    /*
     game reset

    */


}


const testView = new Controller()
console.log(testView.placeGenerator('ho!'));

module.exports = Controller;