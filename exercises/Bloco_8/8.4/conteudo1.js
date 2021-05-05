// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getOdds = (sumOdd, number) => ((number % 2 === 0) ? sumOdd += number: sumOdd);
const summOdds = numbers.reduce(getOdds, 0);
console.log(summOdds);

// Usando o filter:

const summOddsFiltered = numbers.filter((number) => number % 2 === 0)
const summTotalOdds = summOddsFiltered.reduce((result, number) => result + number)
console.log(summTotalOdds);

//Outro modo usando o filter:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;
const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!
console.log(sumNumbers(numbers)); // 152
