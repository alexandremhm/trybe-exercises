// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const url = 'https://dog.ceo/api/breeds/image/random'

function newFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://dog.ceo/api/breeds/image/random') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r));
    } else {
      reject(error);
    }
  });
}

module.exports = { newFetch };