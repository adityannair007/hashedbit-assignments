let string = "INDIA";
let arr = string.split("");
arr.splice(2, 3, "D", "O", "N", "E", "S", "I", "A");
let output = arr.join("");
console.log(output);
