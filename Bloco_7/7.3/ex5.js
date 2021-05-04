// Compare dois objetos (JSON) para verificar se são idênticos ou não


const assert = require('assert');

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

assert.deepStrictEqual(obj2, obj3, 'Estes objetos não são iguais') // Estes objetos não são iguais
assert.deepStrictEqual(obj2, obj1, 'Estes objetos não são iguais') // iguais


// implemente seus testes aqui