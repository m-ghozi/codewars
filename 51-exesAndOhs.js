// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  let x = 0;
  let o = 0;
  const s = str.toLowerCase().split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "x") {
      x++;
    } else if (s[i] === "o") {
      o++;
    }
  }
  if (x === o) {
    return true;
  }
  return false;
}

const XO = (str) => {
  str = str.toLowerCase().split('')
  return str.filter(a => a == 'x').length ===  str.filter(a => a == 'o').length;
};

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO("xsdxoxoffh"));