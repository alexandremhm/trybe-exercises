const skills = ['HTML', 'CSS', 'JS', 'GIT', 'GITHUB']

const replaceX = (string, string2) => string.replace('x', string2);  

console.log(replaceX("Tryber x aqui!", 'Matheus'));

const skillsString = (array) => `${replaceX("Tryber x aqui!", 'Matheus')} 
Minhas cinco principais habilidades são: ${array.sort().join()}`

console.log(skillsString(['HTML', 'CSS', 'JS', 'GIT', 'GITHUB']));

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);
