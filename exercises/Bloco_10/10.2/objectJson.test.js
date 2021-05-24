const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Exercicio 5 - compara os objetos json', () => {
  test('compara obj1 com obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('compara obj1 com obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
   
  test('compara obj2 com obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});