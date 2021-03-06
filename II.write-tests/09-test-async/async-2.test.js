/*const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");
test("gets a list of repositories names (with mock)", function() {
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]);
  var url = "https://api.github.com/users/kabaros/repos";
  // act
  return getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("js-exercises");
  });
});
*/

const getRepos = require('./async-2')
const fetcher = require("./fetcher")
jest.mock('./fetcher')

test('', async () => {
  fetcher.mockResolvedValue([{ name: 'js-exercises' }])

  const url = 'https://api.github.com/users/kabaros/repos'
  const response = await getRepos(url)

  expect(response).toEqual(['js-exercises'])
})