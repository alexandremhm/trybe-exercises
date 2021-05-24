const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }
  return array.sort().reduce((acc, item) => {
    acc.push({ tech: item, name,})
    return acc;
  }, [])
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

module.exports = techList;