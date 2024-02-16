// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989

var max = function(list){
  let max = list[0];
  for (let i = 0; i < list.length; i++){
    if (list[i] >= max){
      max = list[i];
    }
  }
  return max
}

var min = function(list){
  let min = list[0];
  for (let i = 0; i < list.length; i++){
    if (list[i] <= min){
      min = list[i];
    }
  }
  return min;
}

const max = list => list.sort((a,b) => b-a)[0]
const min = list => list.sort((a,b) => a-b)[0]

const max = _ => Math.max(..._)
const min = _ => Math.min(..._)

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4,6,2,1,9,63,-134,566]));