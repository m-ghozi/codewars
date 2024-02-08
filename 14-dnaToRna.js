// DNA to RNA Conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

const DNAtoRNA = dna => {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
      rna = dna[i] == "T" ? rna += "U" : rna += dna[i];
  }
  return rna;
};

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("CGAT"));
