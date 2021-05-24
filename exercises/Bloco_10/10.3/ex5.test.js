// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const data = require('./ex4.js');

test('Exercicio 4', () => {
  
  data.toUpperCase = jest.spyOn(data, 'toUpperCase')
  .mockImplementation((a) => a.toLowerCase())

  data.toUpperCase('BOLA')
  expect(data.toUpperCase).toHaveBeenCalled()
  expect(data.toUpperCase).toHaveBeenCalledTimes(1)
  expect(data.toUpperCase('BOLA')).toBe('bola')
  expect(data.toUpperCase).toHaveBeenCalledTimes(2)

  data.toUpperCase.mockRestore()
  expect(data.toUpperCase('bola')).toBe('BOLA')

})