// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
  const arr = s.split(' ');
  let temp = arr[0].length;
  for (let i = 1; i < arr.length; i++){
    if (arr[i].length < temp ){
      temp = arr[i].length
    } 
  }
  return temp
}

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}

const findShort = s => s.split(" ").sort((a,b) => a.length - b.length)[0].length

console.log(findShort("Let's travel abroad shall we"))
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))