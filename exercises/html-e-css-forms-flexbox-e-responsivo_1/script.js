const estadosBrasil = [
  'AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins'
  ];

  const dropdownState = document.querySelector('#drop-down-estado');

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