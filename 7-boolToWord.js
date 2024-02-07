// Convert boolean values to strings 'Yes' or 'No'
// https://www.codewars.com/kata/53369039d7ab3ac506000467

// function boolToWord( bool ){
//   if (bool == true) {
//     return "Yes";
//   } return "No";
// };

const boolToWord = bool => bool == true ? "Yes" : "No";

console.log(boolToWord(true));
console.log(boolToWord(false));