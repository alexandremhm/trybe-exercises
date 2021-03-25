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

//Exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;
for (index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        oddNumbers += 1;
    }
    
} if(oddNumbers === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(oddNumbers);
}

//Exercicio 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNum = numbers[0];
for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] < smallerNum) {
        smallerNum = numbers[index];
    }
} console.log(smallerNum);

//Exercicio 8

let arrFor = [];
for (index = 0; index <= 25; index += 1){
    arrFor.push(index);
}
console.log(arrFor);

//Exercicio 9

let arrFor = [];
for (index = 0; index <= 25; index += 1){
    arrFor.push(index);
}
for (number = 0; number < arrFor.length; number += 1) {
    console.log (number / 2);
}

//Exercicio bonus 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1){
    for (let indexDois = 0; indexDois < index; indexDois += 1) {
        if  (numbers[index] < numbers[indexDois]) {
            let position = numbers[index];
            numbers[index] = numbers[indexDois];
            numbers[indexDois] = position;                        
        }
    }
} 
console.log(numbers);

//Exercicio bonus 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1){
    for (let indexDois = 0; indexDois < index; indexDois += 1) {
        if  (numbers[index] > numbers[indexDois]) {
            let position = numbers[index];
            numbers[index] = numbers[indexDois];
            numbers[indexDois] = position;                        
        }
    }
} 
console.log(numbers);

//Exercicio bonus 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (index = 0; index < numbers.length; index += 1) {
    newArray.push(numbers[index] * numbers[index +1]);
}
console.log(newArray);
