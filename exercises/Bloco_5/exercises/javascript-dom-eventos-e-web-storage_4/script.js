let body = document.querySelector('.body')
let paragraphP = document.querySelector('#paragraph')




body.style.backgroundColor = localStorage.background

let btRed = document.querySelector('#bg-red')
btRed.addEventListener('click', function(){
  body.style.backgroundColor = 'red'
  localStorage.setItem('background', 'red')
})

let btMag = document.querySelector('#bg-mag')
btMag.addEventListener('click', function(){
  body.style.backgroundColor = 'magenta'
  localStorage.setItem('background', 'magenta')
})

let btGre = document.querySelector('#bg-gre')
btGre.addEventListener('click', function(){
  body.style.backgroundColor = 'green'
  localStorage.setItem('background', 'green')
})

paragraphP.style.color = localStorage.textColor

let txRed = document.querySelector('#tx-red')
txRed.addEventListener('click', function(){
  paragraphP.style.color = 'red'
  localStorage.setItem('textColor', 'red')
})

let txMag = document.querySelector('#tx-mag')
txMag.addEventListener('click', function(){
  paragraphP.style.color = 'magenta'

})
let txGre = document.querySelector('#tx-gre')
txGre.addEventListener('click', function(){
  paragraphP.style.color = 'green'
})

let fontSmall = document.querySelector('#font-small')
fontSmall.addEventListener('click', function() {
  paragraphP.style.fontSize = '1em'
})

let fontMedium = document.querySelector('#font-medium')
fontMedium.addEventListener('click', function() {
  paragraphP.style.fontSize = '2em'
})

let fontBig = document.querySelector('#font-big')
fontBig.addEventListener('click', function() {
  paragraphP.style.fontSize = '3em'
})

let spSmall = document.querySelector('#sp-small')
spSmall.addEventListener('click', function() {
  paragraphP.style.letterSpacing = '0'
})

let spMedium = document.querySelector('#sp-medium')
spMedium.addEventListener('click', function() {
  paragraphP.style.letterSpacing = '0.5px'
})

let spBig = document.querySelector('#sp-big')
spBig.addEventListener('click', function() {
  paragraphP.style.letterSpacing = '1px'
})

let fmCourier = document.querySelector('#fm-courier')
fmCourier.addEventListener('click', function() {
  paragraphP.style.fontFamily= 'Courier'
})

let fmFranklin = document.querySelector("#fm-franklin")
fmFranklin.addEventListener('click', function() {
  paragraphP.style.fontFamily= 'Franklin'
})

let fmArial = document.querySelector("#fm-arial")
fmArial.addEventListener('click', function() {
  paragraphP.style.fontFamily= 'Arial'
})



