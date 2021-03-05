function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    const vowels = ['a', 'o', 'i', 'e', 'u', 'y']
    
    if (!vowels.includes(character.toLowerCase())) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

module.exports = removeVowels;
/*
  Let's trace this piece of code - what is the value of result with this input
  
  var result = removeVowels('samuel');
  
  what is the value of result?
*/