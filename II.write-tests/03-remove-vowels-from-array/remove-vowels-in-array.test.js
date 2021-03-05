const removeVowelsInArray = require("../03-remove-vowels-from-array/remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  const output = removeVowelsInArray([
    'samuel',
    'hero',
  ])

  const expected = ['s_m__l', 'h_r_']

  expect(output).toEqual(expected)
});

test("remove vowels from all words in array", function() {
  const output = removeVowelsInArray([
    "Irina",
    "Etza",
    "Daniel"
  ])

  const expected = ["_r_n_", "_tz_", "D_n__l"]

  expect(output).toEqual(expected)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]