// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.


const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const agesArr = books.map((book) => book.releaseYear - book.author.birthYear)
// const average =  agesArr.reduce((sum, age) => sum = (sum + age))
// console.log(average)

const sum = ((result, value) => result = (result + value));

const expectedResult = 43;

function averageAge() {
  const ageArr = books.reduce((result, value) => {
    result.push(value.releaseYear - value.author.birthYear)
    return result;
  }, [])
  return ageArr.reduce(sum)/ageArr.length
}


// function averageAge() {
//   const agesArr = books.map((book) => book.releaseYear - book.author.birthYear);
//   const sumAges = agesArr.reduce(sum, 0);
//   return sumAges/agesArr.length;
// }

assert.strictEqual(averageAge(), expectedResult);