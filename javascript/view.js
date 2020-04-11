/*
    What goes into the view? 
    ******************
    Neither the controller nor the model should know
    anything about the DOM, HTML elements, CSS, or
    any of that. Anything relating to it should be
    in the view.


    We're going to create the view by manipulating the DOM
    - the document object model
    ******************



*/

const $ = require('jquery');

class View {
    constructor() {
        this.app = this.getElement('#root');

        this.title = this.createElement('h1');

        this.winElm = this.createElement('p', 'numElm');

        this.wordDisplayHTML = this.createElement('div', 'wordisplay');

        this.numGuessRemainHTML = this.createElement('p', 'numGuessElm');

        this.lettersAlreadyGuessedHTML = this.createElement('p', 'guessLetterElm');
    }

    //helper methods to retrieve an element and create an element

    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) {
            element.classList.add(className);
        }

        return element;
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    //set innerText of element
    setElement(element, val) {
        element.textContent = val;
    }

    appendElement(parent, child) {
        parent.appendChild(child);
    }
}

module.exports = View;