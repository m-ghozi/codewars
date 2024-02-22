// List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
  let result = [];
  for (i in l){
    if(typeof(l[i]) === 'number'){
      result.push(l[i])
    }
  }
  return result
}

const filter_list = l => l.filter(Number.isFinite)
const filter_list = l => l.filter(a => typeof a == 'number')

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));