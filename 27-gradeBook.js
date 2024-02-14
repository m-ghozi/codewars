// Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
  const x = (s1 + s2 + s3) / 3
  if (x < 60) {
    return 'F'
  } else if (x < 70){
    return 'D'
  } else if (x < 80){
    return 'C'
  } else if (x < 90){
    return 'B'
  } else {
    return 'A'
  }
}

function getGrade (s1, s2, s3) {
  const x = (s1 + s2 + s3) / 3
  return x < 60 ? 'F' : x < 70 ? 'D' : x < 80 ? 'C' : x < 90 ? 'B' : 'A'
}

console.log(getGrade(80,80,80));