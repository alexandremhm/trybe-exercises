// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;

// console.log(nationality)

// Que tal praticarmos default destructuring com um exercício de fixação? Do jeito que está, quando passamos person para a função nationality o retorno é João is undefined . Ajuste a função nationality para que a chamada nationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));