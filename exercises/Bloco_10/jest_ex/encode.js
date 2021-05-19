const encode = (str) => {
  let letterNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  }
  
  let newArr = str.split('')
  const newWord = newArr.reduce((acc, letter) => {
    letterNumber[letter] ? acc += letterNumber[letter] : acc += letter;    
    return acc; 
  }, '')
  return newWord;
}

const decode = (str) => {
  let letterNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  
  let newArr = str.toString().split('')
  const newWord = newArr.reduce((acc, number) => {
    letterNumber[number] ? acc += letterNumber[number] : acc += number;
    return acc; 
  }, '')
  return newWord;
}

module.exports = {
  encode,
  decode,
}