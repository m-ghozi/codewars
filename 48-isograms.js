// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str) {
  str = str.toLowerCase();
  const chars = {};

  for (const char of str) {
    if (char.match(/[a-z]/) && chars[char]) {
      return false;
    }
    chars[char] = true;
  }

  return true;
}

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log( isIsogram("Dermatoglyphics"))