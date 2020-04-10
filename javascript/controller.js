/*

 **** where model + view talk to one another ****

 Use key events to listen for the letters that your players will type.

calculate the number of guesses
calculate the number of wins


*/


class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }


}


const Model = require('./model');
const View = require('./view');
const GameModiferService = require('./gameModiferService');

const testView = new Controller(Model, View);
// console.log(testView.placeGenerator('ho!'));
// const app = new Controller(new Model(), new View())

module.exports = Controller;