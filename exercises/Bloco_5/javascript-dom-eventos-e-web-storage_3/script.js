function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDayMonth () {
  let monthToAdd = document.querySelector('#days')
  for (let days in dezDaysList) {
    const daysLi = document.createElement('li');
    daysLi.innerText = dezDaysList[days];
    monthToAdd.appendChild(daysLi);
    daysLi.classList.add('day');
    if (daysLi.innerText === '24' || daysLi.innerText === '31') {
      daysLi.classList.add('holiday');
    } else if (daysLi.innerText === '4' || daysLi.innerText === '11' || daysLi.innerText === '18') {
      daysLi.classList.add('friday');
    } else if (daysLi.innerText === '25') {
      daysLi.classList.add('friday');
      daysLi.classList.add('holiday');
    }
  }
}
createDayMonth();

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".


let btnContainerDiv = document.querySelector('.buttons-container');

function holidays (Feriados) {
  let bttHolidays = document.createElement('button');
  bttHolidays.id = 'btn-holiday';
  bttHolidays.innerText = Feriados; 
  btnContainerDiv.appendChild(bttHolidays);
}

holidays('Feriados');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .


let holidayColor = document.getElementsByClassName('holiday');
let btnHolidayColor = document.querySelector('#btn-holiday')

btnHolidayColor.addEventListener('click', function holiday () {
  if (holidayColor[0].style.backgroundColor === 'green'){
  for (let index = 0; index < holidayColor.length; index += 1){
    holidayColor[index].style.backgroundColor = 'rgb(238,238,238)';
  }
} else {
  for (let index2 = 0; index2 < holidayColor.length; index2 += 1){
  holidayColor[index2].style.backgroundColor = 'green';
}
}
  })

//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function lastFridayNight (str) {
  let btnFriday = document.createElement('button');
  btnFriday.innerText = str;
  btnFriday.id = 'btn-friday'
  btnContainerDiv.appendChild(btnFriday);
}

lastFridayNight('Sexta-feira');

//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.0


let fridayNight = document.querySelector('#btn-friday');

fridayNight.addEventListener('click', function () {
  let fridayClass = document.querySelectorAll('.friday');
    for (let index = 0; index < fridayClass.length; index += 1) {     
      if (fridayClass[index].innerText !== 'Last Friday Night') { 
      fridayClass[index].innerText = 'Last Friday Night';
    } else {
    fridayClass[index].innerText = parseInt(fridayClass[index].nextSibling.innerText) - 1
  }
}
})

//6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


function dayZoom () {
  let daysContainerZoom = document.querySelector('#days');
  daysContainerZoom.addEventListener('mouseover', function (daysZoomEvent) {
    let dayEvent = daysZoomEvent.target;
    dayEvent.style.fontSize = '30px';
  })  
    let daysContainerZoom2 = document.querySelector('#days');
    daysContainerZoom2.addEventListener('mouseout', function(daysZoomOutEvent) {
    let dayEvent2 = daysZoomOutEvent.target;
    dayEvent2.style.fontSize = '20px';
  })
}

 dayZoom ()

 //7-Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

let myTasks = document.querySelector('.my-tasks')

function specialTask (str) {
  let tasks = document.createElement('span');
  tasks.innerText = str;  
  myTasks.appendChild(tasks);
}

specialTask('Dog Walking');

//8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

function colorSubtitle (cor) {
  let divColorLegend = document.createElement('div');
  divColorLegend.style.backgroundColor = cor;
  divColorLegend.classList.add('task');
  myTasks.appendChild(divColorLegend);
}

colorSubtitle('red');

//9- Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

let taskDiv = document.querySelector('.task');

taskDiv.addEventListener('click', function (){
  if (taskDiv.classList[1] !== 'selected' ){
  taskDiv.classList.add('selected');
} else {
    taskDiv.classList.remove('selected');
  } 
})

//10- Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

function dayTask () {
    let daysToSelect = document.querySelector('#days');    

    daysToSelect.addEventListener('click', function(colorTask) {
    let colorTaskTarget = colorTask.target;
    let taskColorDiv = document.querySelector('.selected');
    if (colorTaskTarget.style.color !== taskColorDiv.style.backgroundColor
      ){
    colorTaskTarget.style.color = taskColorDiv.style.backgroundColor
  } else if (colorTaskTarget.style.color === taskColorDiv.style.backgroundColor
    ){
    colorTaskTarget.style.color = 'rgb(119,119,119)';
  }
    
  })
}
dayTask();

// bonus - Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

function appointment () {
  let taskInputText = document.querySelector('.task-input');
  let buttonAppointment = document.querySelector('#btn-add');
  let taskList = document.querySelector('.task-list-container')
  buttonAppointment.addEventListener('click', function (){
    if (taskInputText.innerText === '') {
      alert('Erro, campo vazio!')
    } else {
      let liAppointment = document.createElement('li');
      taskList.appendChild(liAppointment);
      liAppointment.innerText = taskInputText.innerText

    }
  })
}


// Escreva seu código abaixo. 

