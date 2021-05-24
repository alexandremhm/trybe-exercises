const sum = require('./sum');

describe('Exercicio 1 - sum function', () => {
  test('sum(4, 5) retorna 9', () => {
    expect(sum(4, 9)).toBe(9);
  });

  test('sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test(`sum(4, '5') testa se dispara erro`, () => {
    expect(() => {sum(4, '5').toThrow()});
  });

  test(`sum(4, '5') retorna erro: parameters must be numbers`, () => {
    expect(() => {sum(4, '5').toThrow(new Error('parameters must be numbers'))});
  });
});