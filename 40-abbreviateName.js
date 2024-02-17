// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
  const result = name.toUpperCase().split(" ");
  return result[0][0] + "." + result[1][0];
}

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
