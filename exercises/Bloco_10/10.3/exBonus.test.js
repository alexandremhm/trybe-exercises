const data = require('./exBonus.js');

 
  test('Testando caso a promise se resolva', () => {
    data.fetchJoke = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve({
          'id': '7h3oGtrOfxc',
          'joke': 'Whiteboards ... are remarkable.',
          'status': 200
        })
      })
    })
    return expect(data.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.')
  })

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

test("espera-se que o fetch retorne uma piada", () => {
  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});