// Por último, mas não menos importante, vamos entender o que é o parâmetro default . Imagine que você queira executar a função greeting abaixo, que imprime uma saudação para o usuário. O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = ((number, value = 1) => number * value);

console.log(multiply(8));