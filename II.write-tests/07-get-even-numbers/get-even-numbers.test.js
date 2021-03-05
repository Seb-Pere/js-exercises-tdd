const getEvenNumber = require('./get-even-numbers')

test('It should return the even numbers from an array', () => {
  const output = getEvenNumber([22, 13, 73, 82, 4])
  const expected = [22, 82, 4]

  expect(output).toEqual(expected)
})

test('It should return an empty if there is no even number in the array', () => {
  const output = getEvenNumber([3, 7, 11])
  const expected = []
  
  expect(output).toEqual(expected)
})

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
