const getSecondThird = require('./get-second-third')

test('It should return the second and third smallest element from an array', () => {
  const numbers = [90, 5, 11, 8, 6]
  const originalNumbers = [...numbers]
  
  const output = getSecondThird(numbers)
  const expected = [6, 8]

  expect(output).toEqual(expected)
  expect(numbers).toEqual(originalNumbers)
})

test('It should return the second and third smallest element from an array', () => {
  const output = getSecondThird([89, 4, 10, 7, 5])
  const expected = [5, 7]
  
  expect(output).toEqual(expected)
})

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
