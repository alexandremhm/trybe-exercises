const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

console.log(saudacoes[1](saudacoes[0])); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

[firstElement, secondElement] = saudacoes;

console.log(firstElement);
console.log(secondElement);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


console.log(comida, animal, bebida); // arroz gato água

[animal, bebida, comida] = ['gato', 'água', 'arroz'];

console.log(comida, animal, bebida); 

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12]


