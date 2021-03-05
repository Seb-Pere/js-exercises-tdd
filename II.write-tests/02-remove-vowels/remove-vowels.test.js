const removeVowels = require('./remove-vowels')

test("remove vowels from word", function() {
  const output = removeVowels('samuel')
  const expected = 's_m__l'

  expect(output).toEqual(expected)
});

test("remove vowels from hero", () => {
  const output = removeVowels('hero')
  const expected = 'h_r_'

  expect(output).toEqual(expected)
})