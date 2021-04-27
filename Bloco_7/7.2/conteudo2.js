const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const objectKey = (objeto) => {  
  const arrObject = Object.keys(objeto);
  for (value in arrObject) {
    console.log(`${arrObject[value]}, Nível: ${objeto[arrObject[value]]}`)
  }
 
}

objectKey(student1);

