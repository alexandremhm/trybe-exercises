//Fatorial

let n = 6;
let resultado = 1;

for (index = 1; index <= n; index += 1) {
        resultado *= index;
    }
console.log(resultado);

//Fibonacci

let fibonacci = [0, 1];
let n = 5;

for (let index = 2; index < n; index += 1) {
    fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2])
}
console.log(fibonacci);

