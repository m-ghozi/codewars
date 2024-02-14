// Friend or Foe?
// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  let result = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) result.push(friends[i]);
  }
  return result;
}

function friend(friends){
  return friends.filter(n => n.length === 4)
}


console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
