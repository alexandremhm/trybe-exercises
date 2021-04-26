// 4 Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (word) => {
  let arr = word.split(' ');
  let biggestWord;

  for (let index = 0; index < arr.length; index += 1) {
    for (let index2 = 1; index2 < arr.length; index2 += 1) {
      if (arr[index].length < arr[index2].length) {
        biggestWord = arr[index2];
      }
    }
  }
  return biggestWord;
}

console.log(longestWord('Ola mundo seja muitooooo felizzzzzzzzzzzzzzzzzz'));