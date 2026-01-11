let longStr = "JavaScript is a versatile programming language.";
let vowels = 0,
  consonants = 0;

for (let char of longStr.toLowerCase()) {
  if (/[a-z]/.test(char)) {
    // Check if it's a letter
    if ("aeiou".includes(char)) vowels++;
    else consonants++;
  }
}

console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
