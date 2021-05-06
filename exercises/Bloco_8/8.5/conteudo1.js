// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maca', 'morango', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme-de-leite', 'leite-condensado', 'mel'];

const fruitSalad = (fruit, additional) => {
  const saladaDeFruta = [...fruit, ...additional];
  return saladaDeFruta;
};

console.log(fruitSalad(specialFruit, additionalItens));