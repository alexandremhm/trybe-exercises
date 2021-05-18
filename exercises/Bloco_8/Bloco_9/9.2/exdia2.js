const generateRandowNumber = () => Math.pow((Math.round((Math.random() * 50))), 2);

const promiseNumber = () => {

  return new Promise((resolve, reject) => {

  const randonNumber = generateRandowNumber();

  const newArr = [randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber];

  const sum = newArr.reduce((acc, number) => acc += number, 0);

  if (sum < 8000) {
    resolve(sum)
  }
    reject();

  })

}

const promiseNumberResult = () => {
  promiseNumber()
    .then((number) => {
      let newArr = [number/2, number/3, number/5, number/10]
      return newArr;
    })
    .then((number) => number.reduce((acc, number) => acc += number, 0))
    .then((number) => console.log(number))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

promiseNumberResult();