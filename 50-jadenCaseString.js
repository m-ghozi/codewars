// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  const words = this.split(" ");
  const jadenCaseWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  return jadenCaseWords.join(" ");
};

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())