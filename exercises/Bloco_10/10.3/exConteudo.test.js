// Faça o mock da funcão subtrair e teste sua chamada.

const math = require('./math');
jest.mock("./math");

test('testando a função subtrair', () => {
  math.subtrair = jest.fn().mockReturnValue(2);

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair(4, 2)).toBe(2); // PQ MUDANDO OS PARAMETROS DENTRO DA FUNCAO SUBTRAIR CONTINUA PASSANDO?
})

test("#subtrair", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSubtrair = jest.spyOn(math, "subtrair");

  mockSubtrair(4, 2);
  expect(mockSubtrair).toHaveBeenCalled();
  // expect(mockSubtrair).toHaveBeenCalledTimes(1);
  // expect(mockSubtrair).toHaveBeenCalledTimes(2);

  expect(mockSubtrair).toHaveBeenCalledWith(4, 2); // PQ NAO FUNCIONA???
  expect(mockSubtrair(4, 2)).toBe(2);
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.

test('testando a função multiplicar', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar(5, 2)).toBe(10); // PQ MUDANDO OS PARAMETROS DENTRO DA FUNCAO SUBTRAIR CONTINUA PASSANDO?
})

//  Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test("#somar", () => {

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(2, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(2, 2);
  expect(math.somar(2, 2)).toBe(4);
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

test("#dividir", () => {
  math.dividir = jest
  .fn()
  .mockReturnValue(15) //Sem USAR O ONCE NAO PASSA
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);
  

  expect(math.dividir).toHaveBeenCalledTimes(0);

  expect(math.dividir(4, 2)).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);

  expect(math.dividir(10, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);

  expect(math.dividir(30, 2)).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);

  
  
});

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

test('subtrair', () => {

  expect(math.subtrair(10, 2)).resolves.toBe(8);


  const mockSub = jest
  .spyOn(math, 'subtrair')
  .mockImplementation((a, b) => a + b);

  math.subtrair(5, 1);
  // expect(mockSub).toHaveBeenCalledTimes(0); NAO FUNCIONA USANDO O toHaveBeenCalledTimes
  expect(mockSub(5, 1)).toBe(6);
  // expect(mockSub).toHaveBeenCalledTimes(1);
  expect(mockSub).toHaveBeenLastCalledWith(5, 1);

  math.subtrair.mockRestore();
  expect(math.subtrair(10, 2)).resolves.toBe(8); //FALA QUE A FUNCAO PRECISA SER UMA PROMISE, MAS JA 

})

test("#somar", async () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(4);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(5);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  const seiLa = await math.somar(1, 2)
  expect(seiLa).toBe(3);
});