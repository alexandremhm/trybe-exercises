let titleHeader = document.getElementById('header-container');
titleHeader.style.background = 'green';

let emergencyContainer = document.getElementsByClassName("emergency-tasks")[0];
emergencyContainer.style.backgroundColor = 'pink'

let emergencyTitle = document.querySelectorAll(".emergency-tasks div h3");
for (let index = 0; index < emergencyTitle.length; index += 1) {
  emergencyTitle[index].style.backgroundColor = 'magenta';
}

let noEmergencyContainer = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyContainer.style.backgroundColor = 'yellow'

let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks div h3");
for (let index = 0; index < emergencyTitle.length; index += 1) {
  noEmergencyTitle[index].style.backgroundColor = 'black';
}

let footerTitle = document.getElementById('footer-container');
footerTitle.style.background = 'green';