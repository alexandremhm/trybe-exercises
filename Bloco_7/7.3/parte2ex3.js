// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
const sumAllNumbers = (array) => {
  let sum = 0
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    sum += number;
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);