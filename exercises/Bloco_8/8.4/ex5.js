// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
 const arrLetters = names.toString().toLowerCase().split('');
 return arrLetters.reduce((acc, letter) => (letter === 'a') ? acc += 1: acc, 0)  
}

assert.deepStrictEqual(containsA(), 20);