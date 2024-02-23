// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let splited = s.toLowerCase().split('')
  let result = []
  for (let i = 0; i < splited.length; i++){
    for (let x = 0; x <= i; x++){
      if (x == 0){
        result.push(splited[i].toUpperCase())
      }
      else {
        result.push(splited[i])
      }
    }
    result.push('-')
  }
	result.pop()
	return result.join('')
}

const accum = (s) =>
  s
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");

console.log(accum("ZpglnRxqenU"));
console.log(accum("abc"));
