// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  const arrLetters = names.toString().split('');
 return arrLetters.reduce((acc, letter) => {
    if(letter === 'A' || letter === 'a') {
      return acc += 1
    }
    return acc;
  }, 0)
  
}

assert.deepStrictEqual(containsA(), 20);