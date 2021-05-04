//Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
const addOne = (array) => {
  let newArr = [];
  for (let index = 0; index < array.length; index += 1) {
    let newIndex = array[index] + 1;
    newArr.push(newIndex)
  }
  return newArr
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);