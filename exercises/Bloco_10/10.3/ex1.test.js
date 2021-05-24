// // Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const data = require('./ex1.js');

test('exercício 1', () => {
  data.randomNumber = jest.fn().mockReturnValue(10)

  data.randomNumber()
  expect(data.randomNumber).toHaveBeenCalled();
  expect(data.randomNumber).toHaveBeenCalledTimes(1);
})
