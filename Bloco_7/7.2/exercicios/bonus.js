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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const getMathStudents = (object, subject) => {
  let sum = 0;
  for (const element in object) {
    for (const element2 in object) {
      if (object[element2].materia === subject) {
        sum = sum + object[element2].numeroEstudantes;
      }
    } return sum
  }
}

console.log(getMathStudents(allLessons, 'História'));

console.log('---------------------------------------------------->')


// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getTeacherSubjects = (object, teacher) => {
  let sum = [];
  for (const element in object) {
    for (const element2 in object) {
      if (object[element2].professor === teacher) {
        sum.push(object[element2].materia);
      }
    } return sum
  }
}

console.log(getTeacherSubjects(allLessons, 'Maria Clara'));

const getSubjectAbstract = (object, teacher, subject) => {
  let abstract = {
    professor: teacher,
    aulas: getTeacherSubjects(object, teacher),
    estudantes: getMathStudents(object, subject),
  }
  return abstract
}

console.log(getSubjectAbstract(allLessons, 'Maria Clara', 'Matemática'))
