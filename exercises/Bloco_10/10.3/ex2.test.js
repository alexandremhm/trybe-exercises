// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const data = require('./ex1.js');

test('Exercicio 2', () => {
  data.randomNumber = jest.fn()
  .mockImplementation((a, b) => a / b)

  data.randomNumber()
  expect(data.randomNumber).toHaveBeenCalled()
  expect(data.randomNumber).toHaveBeenCalledTimes(1)
  expect(data.randomNumber(4, 2)).toBe(2)
  expect(data.randomNumber).toHaveBeenCalledTimes(2)
})
