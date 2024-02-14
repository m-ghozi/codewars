// Is he gonna survive?
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

function hero(bullets, dragons){
  if (bullets/dragons >= 2) {
    return true;
  } return false;
}

const hero = (bullets,dragons) => bullets/dragons >= 2 ? true : false;

console.log(hero(0, 1));
console.log(hero(100, 40));