// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

const getMiddle = (s) => {
  let splited = s.split("");
  let result = [];
  if (splited.length % 2 === 0) {
    result.push(splited[splited.length / 2 - 1]);
    result.push(splited[splited.length / 2]);
  } else {
    result.push(splited[(splited.length - 1) / 2]);
  }
  return result.join("");
};

function getMiddle(s){
  let len = s.length;
  if (len % 2) {
    return s[(len - 1) / 2];
  } else {
    return s[len / 2 - 1] + s[len / 2];
  }
}

function getMiddle(s){
  let len = s.length;
  return len % 2 ? s[(len - 1) / 2]:s[len / 2 - 1] + s[len / 2];
}


function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));