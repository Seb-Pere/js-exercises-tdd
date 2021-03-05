var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  const output = largerThanTen([4, 10, 32, 9, 21])
  const expected = [32, 21]

  expect(output).toEqual(expected)
});

test("Get numbers greater than 10", function() {
  const output = largerThanTen([5, 11, 33, 10, 22])
  const expected = [11, 33, 22]
  
  expect(output).toEqual(expected)
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
