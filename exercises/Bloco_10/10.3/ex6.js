// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
const fetch = require('node-fetch')

const url = 'https://dog.ceo/api/breeds/image/random'

const headers = {
  method: 'GET',
  headers: { 'Accept': 'application/Json' }
  };

function newFetch(url, headers) {
  return new Promise((resolve, reject) => {
    if (url === 'https://dog.ceo/api/breeds/image/random') {
      fetch(url, headers)
        .then((r) => r.json())
        .then((r) => resolve(r));
    } else {
      reject(error);
    }
  });
}

newFetch(url, headers)

module.exports = { newFetch };