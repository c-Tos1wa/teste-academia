//A função countAnagrams recebe uma string e
//retorna a quantidade de anagramas que a atring contém

var count = 0;
function countAnagrams(word) {
  hash = {};
  let key = word.split('').sort()

  for (key of word) {
    if(hash.hasOwnProperty(key)) {
      hash[key]++
      count += 1
    }
    else {
      hash[key] = 1
    }
    return count;
  }
};

countAnagrams('ifailuhkqq')