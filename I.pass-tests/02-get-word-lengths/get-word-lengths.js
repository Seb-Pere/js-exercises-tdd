var getWordLengths = function(someWords) {
    return someWords.map(function(words){
        return words.length;
    })
};

module.exports = getWordLengths;
