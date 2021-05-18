const myRemove = require('./myRemove');

describe('Exercicio 2 - myRemove function', () => {
  const arrayTest = [1, 2, 3, 4];
  test('myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove(arrayTest, 3)).toEqual([1, 2, 4]);
  });

  test('myRemove(arrayTest, 3) nor equal arrayTest', () => {
    expect(myRemove(arrayTest, 3)).not.toEqual(arrayTest);
  });

  test('myRemove(arrayTest) verifica se não houve alterações', () => {
    expect(myRemove(arrayTest)).toEqual(arrayTest);
  });

  test('myRemove(arrayTest, 5) equal [1, 2, 3, 4, 5]', () => {
    expect([1, 2, 3, 4, 5]).toEqual(myRemove(arrayTest, 5));
  });
});