// Dada uma matriz de matrizes, transforme em uma única matriz.


const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
// const newArr = arrays.map((array) => array);

function flatten() {
  return arrays.reduce((result, value) => result.concat(value), []);
  
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
