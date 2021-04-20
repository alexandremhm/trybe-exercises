const estadosBrasil = [
  'AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins'
  ];

  const dropdownState = document.querySelector('#drop-down-estado');
  const sendButton = document.querySelector('#btn-send');  
  const bodyCurriculo = document.querySelector('.bodyCurriculo');
  const dateInput = document.querySelector('#date-beggining');

 

  function createStateElements () {
    for(let index = 0; index < estadosBrasil.length; index += 1){
      const singleState = document.createElement('option');
      const stateInitials = estadosBrasil[index].split(' ', 1);
      singleState.setAttribute('value', stateInitials);
      singleState.setAttribute('name', 'statesOfBrazil');
      singleState.innerHTML = estadosBrasil[index]
      dropdownState.appendChild(singleState);  
    }    
  }

  createStateElements();  
  validation.init();

  sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    inputAll = document.getElementsByTagName('input');
    const divContainer = document.createElement('div');
    divContainer.classList.add('curriculo');
    bodyCurriculo.appendChild(divContainer);

    for (let index = 0; index < inputAll.length; index += 1) {
      if (inputAll[index].type === 'radio') {
        if (inputAll[index].checked) {
          const newElement = document.createElement('p');
          newElement.classList.add('insert-cv');
          divContainer.appendChild(newElement);
          newElement.innerText = inputAll[index].value        
        }

      } else {
      const newElem2 = document.createElement('p');
      newElem2.classList.add('insert-cv');
      divContainer.appendChild(newElem2);
      newElem2.innerText = inputAll[index].value;
    }
    }
    const newElem3 = document.createElement('p');
    newElem3.classList.add('insert-cv');
    divContainer.innerText += '\n' + dropdownState.value; 

  });

  // const newElem3 = document.createElement('p');
  //   newElem3.classList.add('insert-cv');
  //   divContainer.insertBefore(newElem3, userCity)
  //   newElem3.innerText = dropdownState.value; 


    // sendButton.addEventListener('click', function (event){ 
    //   event.preventDefault();
    //   const  day = dateInput.value.substr(0, 2);
    //   const month = dateInput.value.substr(3, 2);

      //  if(day < 0  || day > 31) {
      //   alert('Insira uma data com formato válido!');
      //  } else if (month < 0 || month > 12) {
      //   alert('Insira uma data com formato válido!');       
      //  }
    
  