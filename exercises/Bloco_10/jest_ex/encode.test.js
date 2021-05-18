const { encode, changeLetter, changeLetter2, decode } = require('./encode.js');

describe('Encode/Decode functions', () => {
  test('testa se encode é função', () => {
    expect(typeof encode).toBe('function');
  });

  test('testa se decode é função', () => {
    expect(typeof encode).toBe('function');
  });

  test('testa se encode converte as vogais em numeros', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('testa se decode converte as numeros em vogais', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('testa se encode nao converte demais letras em numeros', () => {
    expect(encode('aeioub')).not.toBe('123456');
  });

  test('testa se decode não converte demais numeros em vogais', () => {
    expect(decode('123456')).not.toBe('aeioub');
  });

  test('testa se encode nao converte demais letras em numeros', () => {
    expect(encode('aeiou')).toHaveLength(5);
  });
 
});