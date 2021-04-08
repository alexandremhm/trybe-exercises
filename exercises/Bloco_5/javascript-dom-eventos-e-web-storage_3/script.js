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
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDayMonth () {
  let monthToAdd = document.querySelector('#days')
  for (let days in dezDaysList) {
    const daysLi = document.createElement('li');
    daysLi.innerHTML = dezDaysList[days];
    monthToAdd.appendChild(daysLi);
    daysLi.classList.add('day');
    if (daysLi.innerHTML === '24' || daysLi.innerHTML === '25' || daysLi.innerHTML === '31') {
      daysLi.classList.add('holiday');
    } else if (daysLi.innerHTML === '4' || daysLi.innerHTML === '11' || daysLi.innerHTML === '18' || daysLi.innerHTML === '25') {
      daysLi.classList.add('friday');
    }
  }
}
createDayMonth();

let btnContainerDiv = document.querySelector('.buttons-container');

function holidays (Feriados) {
  let bttHolidays = document.createElement('button');
  bttHolidays.id = 'btn-holiday';
  bttHolidays.innerText = Feriados; 
  btnContainerDiv.appendChild(bttHolidays);
}

holidays('Feriados');

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



// Escreva seu código abaixo. 

