const generateRandowNumber = () => Math.pow((Math.round((Math.random() * 50))), 2);

const promiseNumber = () => {

  const randonNumber = generateRandowNumber();
  const newArr = [randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber, randonNumber];

  const sum = newArr.reduce((acc, number) => acc += number, 0);

  if (sum < 8000) {
    return sum;
  }
    throw new Error()

}

const sumArr = (sum) => numbers = [2, 3, 5, 10].map((number) => sum/number).reduce((acc, number) => acc += number, 0)

const promiseNumberResult = async () => {
  try {
    const resultPromise = await promiseNumber();
    const sumResult = await sumArr(resultPromise);    
    console.log(sumResult);
  }
  catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

promiseNumberResult();