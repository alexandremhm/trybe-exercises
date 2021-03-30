// 1-Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromoCheck (palavra) {
    if (palavra.split('').reverse().join('') == palavra) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromoCheck('arara');
palindromoCheck('abelha');

// fonte: https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript

// 2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function higherInt (arrInt) {
    let higherIndex;
    for (let index = 0; index < arrInt.length; index += 1) {        
        if (arrInt[index] > arrInt[index + 1]) {
            return higherIndex = [index]
        }
    } 
    
} 
   

console.log(higherInt([2, 4, 6, 7, 10, 0, -3, -5]));

// 3- Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerIndexInt (arrInt) {
    let lowerIndex;
    for (let index = 0; index < arrInt.length; index += 1) { 
        for (let index2 = index + 1; index2 < arrInt.length; index2 += 1){       
        if (arrInt[index] > arrInt[index2]) {
            lowerIndex = [index2]
        }
    }
} return lowerIndex     
} 
   
console.log(lowerIndexInt([2, 4, 6, 7, 10, 0, -3, -5]));

// 4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function higherStrFinder(arrStr) {
    let higherStr;
    for (index = 0; index < arrStr.length; index += 1) {
        if (arrStr[index].length > arrStr[index +1].length) {
            return higherStr = arrStr[index];
        }                
    }
}

console.log(higherStrFinder(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatNumberFinder (arrInt) {
    let count = 0;
    let secondCounter = 0;
    let strRepeated;
    
    for (let index = 0; index < arrInt.length; index += 1){
        count = 0;        
        for (let index2 = index + 1; index2 < arrInt.length; index2 += 1){
            if (arrInt[index] === arrInt[index2]){
                count += 1;                
            }            
        } 
        if (count > secondCounter) {
            secondCounter = count;
            strRepeated = arrInt[index];
                  
        }  
        
    } return strRepeated; 

} console.log(repeatNumberFinder([2, 3, 2, 5, 8, 2, 3]));

// 6 -Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumNumber (number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1){
    sum = sum + index;
  } 
  return sum;
} 

console.log(sumNumber(5));

// 7-Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function strVerfyer (word, ending){
    let compareToWord = ''
    for (let index = word.length - 1; index >= word.length - ending.length; index -= 1){
        compareToWord = compareToWord + word[index]        
    } 
    compareToWord = compareToWord.split('').reverse().join('')    

    if (compareToWord === ending){
        return true;
    } else{
        return false;
    }
} 
console.log(strVerfyer('trybe', 'be'));
console.log(strVerfyer('trybe', 'bo'));
console.log(strVerfyer('abelha', 'elha'));
console.log(strVerfyer('paralelepipedo', 'pipedo'));
console.log(strVerfyer('escola', 'lula'));


