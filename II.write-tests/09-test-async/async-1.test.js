const getRepos = require("./async-1");

test("gets a list of repositories names", function() {
  var url = "https://api.github.com/users/kabaros/repos";

  return getRepos(url).then(function(result) {
    //expect(result).toContain("js-exercises");
    expect(result).toContain("dom-ajax-repo");
  });
});

test('', async () => {
  const url = 'https://api.github.com/users/kabaros/repos'

  const response = await getRepos(url)
  expect(response).toContain('dom-ajax-repo')
})