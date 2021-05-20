const myFizzBuzz = require('./myFizzBuzz');

describe('Exercicio 4 - myFizzBuzz function', () => {
  test('myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('myFizzBuzz(9) retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('myFizzBuzz(25) retorna buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('myFizzBuzz(4) retorna 4', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  test(`myFizzBuzz('4') retorna false`, () => {
    expect(myFizzBuzz('4')).toBeFalsy();
  });
 
});