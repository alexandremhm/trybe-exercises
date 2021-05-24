// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.


const data = require('./ex4.js');
jest.mock("./ex4.js");

test('Exercicio 4', () => {
  data.toUpperCase.mockImplementation((a) => a.toLowerCase())

  data.toUpperCase('BOLA')
  expect(data.toUpperCase).toHaveBeenCalled()
  expect(data.toUpperCase).toHaveBeenCalledTimes(1)
  expect(data.toUpperCase('BOLA')).toBe('bola')
  expect(data.toUpperCase).toHaveBeenCalledTimes(2)

  data.firstLetterFinder.mockImplementation((a) => {
    const arrLetters = a.split('');
    const arrSize = arrLetters.length;
    return arrLetters[arrSize - 1]
  })

  data.firstLetterFinder('BOLA')
  expect(data.firstLetterFinder).toHaveBeenCalled()
  expect(data.firstLetterFinder).toHaveBeenCalledTimes(1)
  expect(data.firstLetterFinder('BOLA')).toBe('A')
  expect(data.firstLetterFinder).toHaveBeenCalledTimes(2)

  data.concatString.mockImplementation((str1, str2, str3) => str1 + str2 + str3)

  data.concatString('A ', 'Vida ', 'é bela')
  expect(data.concatString).toHaveBeenCalled()
  expect(data.concatString).toHaveBeenCalledTimes(1)
  expect(data.concatString('A ', 'Vida ', 'é bela')).toBe('A Vida é bela')
  expect(data.concatString).toHaveBeenCalledTimes(2)
})

