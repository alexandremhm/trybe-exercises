const sumN = (a, b) => a + b;

test('sums two values', () => {
  expect(sumN(2, 3)).toEqual(5);
});