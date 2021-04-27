// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.


const btnEnviar = document.querySelector('#btn');
const showCount = document.querySelector('#showCount')

let clickCount = 0;

btnEnviar.addEventListener('click', () => {
   clickCount += 1;
   showCount.innerHTML = clickCount
})

