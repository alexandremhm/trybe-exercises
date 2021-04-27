const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (object, key, value) => object[key] = value;

addKey(lesson2, 'turno', 'manha')
console.log(lesson2)

console.log('------------------------------------------------->')

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2));
console.log('------------------------------------------------->')


// Crie uma função para mostrar o tamanho de um objeto.

const getSizeObject = (object) => Object.keys(object).length;
console.log(getSizeObject(lesson2));
console.log('------------------------------------------------->')


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => Object.values(object);
console.log(listValues(lesson2));
console.log('------------------------------------------------->')


// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .



const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
console.log('------------------------------------------------->')


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getAllStudents = (object) => {
  let sum = 0;
  for (index in object) {
   let numStudents = object[index].numeroEstudantes;
   sum = sum + numStudents;
  }
  return sum;
}
console.log(getAllStudents(allLessons));
console.log('------------------------------------------------->')


// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByPosition = (object, position) => {
  let valuesFromObjects = Object.values(object);
  for (element in valuesFromObjects) {
    if (element == position) {
      return valuesFromObjects[element];
    }
  }
}

console.log(getValueByPosition(lesson1, 2))
console.log('------------------------------------------------->')


// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyKeyValue = (object, key, value) => {
  let chave = Object.keys(object).includes(key);
  let valor = Object.values(object).includes(value);

  if (chave && valor) {
    return true;
  }
  return false;
  
}

console.log(verifyKeyValue(lesson3, 'turno', 'noite'))