//Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
const wordLengths = (array) => {
  let newArr = [];
  for (let index = 0; index < array.length; index += 1) {
    let wordLength = array[index].length;
    newArr.push(wordLength);
  }
  return newArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);