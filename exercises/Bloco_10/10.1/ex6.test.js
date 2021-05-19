// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };
      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const objAnimal = Animals.find((animal) => animal.name === name);
      if (objAnimal) {
        return resolve(objAnimal);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(object => object)
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimal = Animals.filter((animal) => animal.age === age);
      if (listAnimal.length !== 0) {
        return resolve(listAnimal);
      };
      return reject('Nenhum animal com essa idade!');
    }, 100);

  })
)

const getAnimalAgeList = (age) => {
  return findAnimalByAge(age).then(array => array)
};

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne uma array com o animal', () => {
      expect.assertions(1);
      return getAnimalAgeList(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAgeList(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});