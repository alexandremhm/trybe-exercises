const searchEmployee = require('./searchEmployee.js');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Ao receber uma id = 4678-2 e firstName como Parametro retorna a frase: "Informação solicitada: firstName = Paul"', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Informação solicitada = firstName: Paul');    
  });
  it('Ao receber uma id = 4678-2 e lastName como Parametro retorna a frase: "Informação solicitada: lastName = Dodds"', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Informação solicitada = lastName: Dodds');    
  });
  it('Ao receber uma id = 4678-2 e specialities como Parametro retorna a frase: "Informação solicitada: specialities = Backend"', () => {
    expect(searchEmployee('4678-2', 'specialities')).toBe('Informação solicitada = specialities: Backend');   
  });
  it('Se não receber um id dispara o erro: "ID não identificada"', () => {
    expect(() => {searchEmployee('firstName') }).toThrowError(new Error('ID não identificada'));
  });
  it('Se não receber um detail válido dispara o erro: "Informação indisponível"', () => {
    expect(() => {searchEmployee('4678-2', 'city') }).toThrowError(new Error('Informação indisponível'));
  });
});