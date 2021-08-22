// Imperative Approach

function pigLatin(str) {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if(vowels.includes(str[0])){
    return str + 'way';
  } else {
    let firstVowelIndex = 0;
    while(firstVowelIndex<=str.length && !vowels.includes(str[firstVowelIndex])){
      firstVowelIndex++;
    }
    return str.substring(firstVowelIndex) + str.substring(0, firstVowelIndex) + 'ay';
  }
}


// Declarative Approach

function pigLatin(str) {
  return str
  .replace(/^([aeiouy])(._)/, '$1$2way')
  .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
