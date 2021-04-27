const createObject = (object, chave, value) => object = {chave: value}

console.log(createObject('contact', 'name', 'Matheus'))

let contato = {

}

const createObject = (object, chave, value) => {
  object[chave] = value
  return object
   
  
}
console.log(createObject(contato, 'name', 'Matheus'))
