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

    //helper methods to retrieve an element and create an element

    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    constructor() {

    }







}

const testView = new View()
console.log(testView.placeGenerator('ho!'));


module.exports = View;