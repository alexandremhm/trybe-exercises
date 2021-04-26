const skills = ['HTML', 'CSS', 'JS', 'GIT', 'GITHUB']

const replaceX = (string, string2) => string.replace('x', string2);  

console.log(replaceX("Tryber x aqui!", 'Matheus'));

const skillsString = (array) => `${replaceX("Tryber x aqui!", 'Matheus')} 
Minhas cinco principais habilidades são: ${array.sort().join()}`

console.log(skillsString(['HTML', 'CSS', 'JS', 'GIT', 'GITHUB']));
