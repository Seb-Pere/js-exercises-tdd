const largestNumber = require('./largest-number')

test('It should return the highest element from an array', () => {
  const numbers = [3, 21, 88, 4, 36]
  const originalNumbers = [...numbers]

  const output = largestNumber(numbers)
  const expected = 88

  expect(output).toEqual(expected)
  expect(numbers).toEqual(originalNumbers)
})

test('It should return the highest element from an array', () => {
  const numbers = [2, 20, 87, 3, 35]
  const originalNumbers = [...numbers]
  
  const output = largestNumber(numbers)
  const expected = 87
  
  expect(output).toEqual(expected)
  expect(numbers).toEqual(originalNumbers)
})

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed