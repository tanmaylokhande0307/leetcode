const mergeAlternately = function (word1, word2) {
  let newWord = "";

  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      newWord += word1[i] + word2[i];
    }
  } else if (word1.length < word2.length) {
    for (let i = 0; i < word1.length; i++) {
      newWord += word1[i] + word2[i];
    }
    for(let i=word1.length;i < word2.length;i++){
        newWord += word2[i];
    }
    console.log(newWord)
  } else if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
        console.log(newWord)
      newWord += word1[i] + word2[i];
    }
    for(let i=word2.length;i < word1.length;i++){
        newWord += word1[i];
    }
    console.log(newWord)
  }
  return newWord
};