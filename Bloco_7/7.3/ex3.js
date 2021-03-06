// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

//assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]); //deu erro nao retorna o esperado
//assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]) // nao retorna

console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3)) //[1 ,2 ,4] sofreu alterações

assert.strictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4, 5]) // não retorna o esperado

// implemente seus testes aqui