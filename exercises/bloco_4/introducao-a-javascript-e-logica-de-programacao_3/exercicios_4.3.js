// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 4;
let buildingBlock = '*';
let loopHole = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  loopHole = loopHole + buildingBlock;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(loopHole);
};

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let buildingBlock = '*';
let loopHole = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    loopHole = loopHole + buildingBlock;
    console.log(loopHole);
  };

//3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let asterisk = '*';
let hole = '';
let lineLenght = n;

for (let index = 0; index < n; index += 1) {
  for (let lineIndex = 0; lineIndex <= n; lineIndex += 1){
    if (lineIndex < lineLenght) {
      hole = hole + ' ';
    } else {
      hole = hole + asterisk;
    }
  }
  console.log(hole);
  hole = '';
  lineLenght -= 1;
}

 
//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let asterisk = '*';
let hole = '';

for (let index = 0; index < n; index += 1){
     if (index < 2) {
      hole = hole + ' ';
    } else if (index === 2) {
      hole = hole + asterisk;
    } else {
      hole = hole + ' ';
  }   
}
console.log(hole);
hole = '';

for (let index = 0; index < n; index += 1){
  if (index === 0) {
    hole = hole + ' ';
    } else if (index === 4){
    hole = hole + ' ';
    } else {
      hole = hole + asterisk;
 }     

}
console.log(hole);
hole = '';

for (let index = 0; index < n; index +=1){
  
    hole = hole + asterisk;
  }
  
 console.log(hole);

 //4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let asterisk = '*';
let hole = '';
let halfMatrix = (n + 1)/2;
let rightMatrix = halfMatrix;
let leftMatrix = halfMatrix;

for (let lineIndex = 0; lineIndex <= halfMatrix; lineIndex += 1){
  for (let columnIndex = 0;  columnIndex <= n; columnIndex += 1){
    if (columnIndex > leftMatrix && columnIndex < rightMatrix) {
      hole = hole + asterisk;
    } else {
      hole = hole + ' ';
    }
  }
  console.log(hole);
  hole ='';
  rightMatrix += 1;
  leftMatrix -= 1;
}

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 5;
let asterisk = '*';
let hole = '';  
let halfMatrix = (n + 1)/2;
let rightMatrix = halfMatrix;
let leftMatrix = halfMatrix;

for (let lineIndex = 0; lineIndex <= halfMatrix; lineIndex += 1){
  for (let columnIndex = 0;  columnIndex <= n; columnIndex += 1){
    if (columnIndex > leftMatrix && columnIndex < rightMatrix) {
      hole = hole + asterisk;
    } else {
      hole = hole + ' ';
    }
  }
  console.log(hole);
  hole ='';
  rightMatrix += 1;
  leftMatrix -= 1;
}

//6- Faça um programa que diz se um número definido numa variável é primo ou não.

let number = 7;
let numberOfDivisors = 1;
for (let index = 0; index < number; index += 1)
  if(number % [index] === 0) {
    numberOfDivisors += 1;
  }

  if (numberOfDivisors === 2) {
    console.log (number ,"é um número Primo.")
  } else {
    console.log (number , "nao é um número Primo.")
  }


