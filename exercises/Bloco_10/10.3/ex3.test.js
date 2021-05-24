// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const data = require('./ex1.js');

test('exercicio 3', () => {
  data.randomNumber = jest.fn()
  .mockImplementation((a, b, c) => a * b * c)

  data.randomNumber()
  expect(data.randomNumber).toHaveBeenCalled()
  expect(data.randomNumber).toHaveBeenCalledTimes(1)
  expect(data.randomNumber(2, 2, 2)).toBe(8)
  expect(data.randomNumber).toHaveBeenCalledTimes(2)

  data.randomNumber.mockReset();
  data.randomNumber.mockImplementation((a) => a * 2)
  data.randomNumber()
  expect(data.randomNumber).toHaveBeenCalled()
  expect(data.randomNumber).toHaveBeenCalledTimes(1)
  expect(data.randomNumber(2)).toBe(4)
  expect(data.randomNumber).toHaveBeenCalledTimes(2)
})