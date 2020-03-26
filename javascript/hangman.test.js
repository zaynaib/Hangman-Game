//import Model from './model';
const Model = require('./model');

jest.mock('./model.js');

it('works', () => {
    let mario = new Model();
    expect(mario).toBe(hangmanChoices)
})
// jest.mock('./model');

// beforeEach(() => {
//     // Clear all instances and calls to constructor and all methods:
//     Model.mockClear();
// });

// it('We can check if the consumer called the class constructor', () => {
//     const marioData = new Model();
//     expect(marioData).toHaveBeenCalledTimes(1);
// });

// let mario = new Model();
// console.log(mario)