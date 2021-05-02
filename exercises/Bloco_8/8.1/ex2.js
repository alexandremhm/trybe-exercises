const generateRandomNumber = () => {
  const randomNumber = Math.round((Math.random() * 5))
  return randomNumber;
}

const prizeDrawResult = (betNumber) => {
  if (betNumber === generateRandomNumber()) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente!';
};

console.log(prizeDrawResult(3));

