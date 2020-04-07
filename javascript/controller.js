/*

 **** where model + view talk to one another ****

 Use key events to listen for the letters that your players will type.

calculate the number of guesses
calculate the number of wins


*/

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    placeGenerator(word) {

        let placeholders = [];

        for (let letter of word) {
            placeholders.push("_")
        }
        return placeholders;
    }
}


const testView = new View()
console.log(testView.placeGenerator('ho!'));

module.exports = Controller;