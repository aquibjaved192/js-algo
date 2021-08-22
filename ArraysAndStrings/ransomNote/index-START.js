/*
  Given a magazine of words and a ransom note,
  determine if it’s possible to “cut out” and 
  create the ransom note from the magazine words.
*/

function ransomNote(note, magazine) {
  const magazineMap = {};
  magazine.split(" ").forEach(word => {
    if (magazineMap[word]) {
      magazineMap[word] += 1;
    } else {
      magazineMap[word] = 1;
    }
  })
  for (let word of note.split(" ")) {
    if (magazineMap[word]) {
      magazineMap[word] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = ransomNote;