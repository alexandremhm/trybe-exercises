const btn = document.querySelector('#btn');

const render = ({ logradouro, bairro, localidade, cep, uf }) => {
  const divResult = document.querySelector('#result');
  divResult.innerHTML = `CEP: ${cep}<br> Logradouro: ${logradouro}<br> Bairro: ${bairro}<br> Cidade: ${localidade}<br> UF: ${uf}<br>`
}

const onClick = (event) => {
  event.preventDefault();
  const inputCep = document.querySelector('#input-cep');

  fetch(`https:viacep.com.br/ws/${inputCep.value}/json/`)
  .then((data) => data.json())
  .then((data) => render(data))
}

btn.addEventListener('click', (event) => onClick(event));


