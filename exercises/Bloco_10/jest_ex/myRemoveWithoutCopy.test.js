const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Exercicio 3 - myRemoveWithoutCopy function', () => {
  const arrayTest = [1, 2, 3, 4];
  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy(arrayTest, 3)).toEqual([1, 2, 4]);
  });

  test('myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(arrayTest, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('myRemoveWithoutCopy([1, 2, 3, 4]) não sofreu alterações', () => {
    expect(myRemoveWithoutCopy(arrayTest)).toEqual(arrayTest);
  });

  test('myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna [1, 2, 3, 4, 5]', () => {
    expect(myRemoveWithoutCopy(arrayTest, 5)).toEqual([1, 2, 3, 4, 5]);
  });
 
});