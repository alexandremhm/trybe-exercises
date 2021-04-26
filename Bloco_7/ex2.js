const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensFunction = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    const arr2 = [];
    for (let index2 = 1; index2 < array.length; index2 += 1) {
      if (array[index] > array[index2]) {
        arr2.push(array[index2]);        
      }      
    }
    return arr2
    
  }
}

console.log(oddsAndEvensFunction([13, 3, 4, 10, 7, 2]))


// Seu código aqui.

let array = [13, 3, 4, 10, 7, 2]
array.sort((a, b) => b - a);
console.log( `Os números ${array} se encontram ordenados de forma crescente!`);



const oddsAndEvensFunction2 = (array) => 
  array.sort(function(a, b) {
    return a - b;
  })
  
console.log( `Os números ${oddsAndEvensFunction2([13, 3, 4, 10, 7, 2])} se encontram ordenados de forma crescente!`);

