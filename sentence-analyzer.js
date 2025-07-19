function getVowelCount(sentence) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function getConsonantCount(sentence) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function getPunctuationCount(sentence) {
  let count = 0;

  for (let char of sentence) {
    if (!/[a-zA-Z\s]/.test(char)) {
      count++;
    }
  }

  return count;
}

function getWordCount(sentence) {
  const trimmed = sentence.trim();
  if (trimmed === "") {
    return 0;
  }

  return trimmed.split(/\s+/).length;
}

function analyzeSentence(sentence) {
  return {
    vowelCount: getVowelCount(sentence),
    consonantCount: getConsonantCount(sentence),
    punctuationCount: getPunctuationCount(sentence),
    wordCount: getWordCount(sentence)
  };
}

const sentence = "Apples are tasty fruits!";
const analysis = analyzeSentence(sentence);

console.log(`Sentence: "${sentence}"`);
console.log(`Vowel Count: ${analysis.vowelCount}`);
console.log(`Consonant Count: ${analysis.consonantCount}`);
console.log(`Punctuation Count: ${analysis.punctuationCount}`);
console.log(`Word Count: ${analysis.wordCount}`);
