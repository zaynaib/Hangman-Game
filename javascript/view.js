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

class View {
    constructor() {
        this.app = this.getElement('#root');
        this.el = null;

        // The title of the app
        // this.title = this.createElement('h1');
        // this.title.textContent = 'Hangman Mario';
    }

    //a

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

    appendElement(el) {
        document.body.appendChild(el);
    }


    createTitle() {
        const title = this.createElement('h1');
        title.textContent = 'Hangman Mario';
        // title.innerHTML = 'test satu dua tiga';
        // document.body.appendChild(title);
        return title
    }


}

const testView = new View();
let t = testView.createTitle();
console.log(t)
testView.appendElement(t);
console.log('hello')
module.exports = View;