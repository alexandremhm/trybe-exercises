//Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//Exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum = sum + numbers[index];
}
console.log(sum);

//Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum = sum + numbers[index];
}
let average = sum / numbers.length;
console.log(average);

//Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum = sum + numbers[index];
}
let average = sum / numbers.length;
if (average > 20){
    console.log('Valor maior que 20!');
} else {
    console.log('Valor menor que 20');
}

//Exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNum = 0;
for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] > higherNum) {
        higherNum = numbers[index];
    }
} console.log(higherNum);