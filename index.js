const words = require('./words.json');

function logAllWords(words) {
  console.log(words);
}

// logAllWords(words)

function logFirstTenWords(words) {
  const firstTenWords = words.slice(0, 10);
  console.log('first 10:', firstTenWords);
}

// logFirstTenWords(words);

function logNextTenWords(words) {
  console.log('next 10:', words.slice(10, 20));
}

// logNextTenWords(words);

function logFirstXWords(words, x) {
  console.log(words.slice(0, x));
}

// logFirstXWords(words, 3)

function logSubsetOfWords(words, x, y) {
  console.log(words.slice(x, y));
}

// logSubsetOfWords(words, 0, 3)

function sortWords(words) {
  console.log(words.sort((a, b) => (a > b ? 1 : -1)));
}

// sortWords(words)

const wordsWithQ = (words) => words.filter((word) => word.includes('q' || 'Q'));

// console.log(wordsWithQ(words))

const findWordsWithLetter = (words, letter) => {
  words = words.filter((word) => word.includes(letter));
  if (words.length == 0) return 'No matching words found';
  else return words;
};

// console.log(findWordsWithLetter(words, 'z'));
// console.log(findWordsWithLetter(words, '?'));
// console.log(findWordsWithLetter(words, process.argv[2]));

const lettersMatch = (words, ...args) =>
  args.length > 5
    ? 'Error. Too many letters.'
    : words.filter((word) => word.includes(...args));

// console.log(lettersMatch(words, 'c', 'z', 'o'))
// console.log(lettersMatch(words, 'c', 'z', 'o', 'b', 'i', 'g'));
console.log(lettersMatch(words, ...process.argv[2]));

const lettersExactMatch (words, string) => {
    if (string.length !== 5) {
        return 'Error! Word must be exactly 5 letters.';
    }

    return words.map((word) => {

    })
}