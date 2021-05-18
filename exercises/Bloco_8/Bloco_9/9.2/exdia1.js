// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeText = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => (data.joke))
  .then((joke) => jokeContainer.innerHTML = joke);
};

window.onload = () => fetchJoke();