let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  // Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vinda,', info.personagem, '.')

  // Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log(info);

  // Faça um for/in que mostre todas as chaves do objeto.

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  for (let cartoon in info) {
      console.log(cartoon);
  }

  // Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  for (let cartoon in info) {
      console.log(info[cartoon]);
  }

  // Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let secondInfo = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
  }

 
for (let data in info){
    if (
        info[data] === info.recorrente &&
        info[data] === 'Sim' &&
        secondInfo[data] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[data], 'e', secondInfo[data]);
    }
}
