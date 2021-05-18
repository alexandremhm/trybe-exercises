function changeLetter(letter) {
  let letterNumber = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let letterIndex = letterNumber[letter];
  if (letterIndex) {
    return letterIndex;
  }
  return letter;
}

function encode(str) {
  let str2 = '';
  for (let index = 0; index < str.length; index += 1) {
    str2 += changeLetter(str[index]);
  }
  return str2;
}

function changeLetter2(letter) {
  let letterNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let letterIndex = letterNumber[letter];
  if (letterIndex) {
    return letterIndex;
  }
  return letter;
}

function decode(str) {
  let str2 = '';
  for (let index = 0; index < str.length; index += 1) {
    str2 += changeLetter2(str[index]);
  }
  return str2;
}

module.exports = {
  changeLetter,
  encode,
  changeLetter2,
  decode,
}