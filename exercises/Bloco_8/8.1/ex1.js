const createObj = (nomeCompleto) => {
  const objectCreated = {
    fullName: nomeCompleto,
    email: (`${nomeCompleto}@trybe.com`).toLowerCase(),
  }
  return objectCreated;
}

const newEmployees = (namesObject) => {
  const employees = {
    id1: createObj('Pedro Guerra'),
    id2: createObj('Luiza Drumond '),
    id3: createObj('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees((createObj)))