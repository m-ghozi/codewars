// Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b) => a-b)[0]
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args[0];
    for (let i = 0; i<args.length;i++){
      if (args[i] < result){
        result = args[i]
      }
    }
    return result
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]));
console.log(sif.findSmallestInt([78,56,232,12,18]));