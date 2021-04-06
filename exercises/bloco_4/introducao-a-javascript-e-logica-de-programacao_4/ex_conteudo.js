//Exercicio de conteudo parte 1

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora', player.name, player.lastName, 'tem', player.age, 'anos de idade.');

console.log('A jogadora', player.name, player.lastName, 'foi eleita a melhor do mundo', player.bestInTheWorld.length, 'vezes.');

console.log('A jogadora', player.name, player.lastName, 'possui', player.medals.golden, 'medalhas de ouro e ', player.medals.silver, 'medalhas de prata.');

//Exercicio de conteudo parte 2

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

// Diferenca entre for in e for off

for (let position in food) {
  console.log(position);
}
//resultado: 0, 1, 2;

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;

// Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 
for (let key in names){
  console.log('Olá', names[key]);
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' .

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let key in carro) {
  console.log(key, ':', carro[key]);
}

