const hydrate = (string) => {
  const newArr = string.split('');
  console.log(newArr)
  const numberWaterGlasses = newArr.reduce((acc, item) => {
    if(Number.isInteger(parseInt(item))) {
      acc += parseInt(item);      
    }
    return acc;
  }, 0)
  
  if (numberWaterGlasses === 1) {
    return '1 copo de água';
  }
  return (`${numberWaterGlasses} copos de água`);
}

module.exports = hydrate;