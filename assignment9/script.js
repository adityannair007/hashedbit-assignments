function scopeExample() {
  if (true) {
    var globalish = "I am function-scoped (var)";
    let local = "I am block-scoped (let)";
    const constant = "I am also block-scoped (const)";
    console.log("Inside block:", local, constant);
  }
  console.log("Outside block:", globalish);
}

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
function getSecondFruit() {
  return fruits[1];
}

function pushAndPop(arr) {
  let tempArr = [...arr];
  tempArr.push("New Item");
  console.log("After Push:", tempArr);
  tempArr.pop();
  return tempArr;
}

const numbers = [2, 4, 6, 8];
function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

const person = {
  name: "Adityan",
  age: 22,
  occupation: "Software Engineer",
};
function greetPerson(obj) {
  return `Hello! My name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`;
}

function getArea(rect) {
  return rect.width * rect.height;
}

function getObjectKeys(obj) {
  return Object.keys(obj);
}

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const data = [10, 20, 30, 40];
function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("--- 1. Scope Example ---");
scopeExample();

console.log("\n--- 2. Second Fruit ---");
console.log(getSecondFruit());

console.log("\n--- 3. Push & Pop ---");
console.log("Final Array:", pushAndPop([1, 2, 3]));

console.log("\n--- 4. Squared Numbers ---");
console.log(squareNumbers(numbers));

console.log("\n--- 5. Filtered Odds ---");
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));

console.log("\n--- 6. Person Greeting ---");
console.log(greetPerson(person));

console.log("\n--- 7. Area Calculation ---");
console.log("Area:", getArea({ width: 10, height: 5 }));

console.log("\n--- 8. Object Keys ---");
console.log(getObjectKeys(person));

console.log("\n--- 9. Merged Objects ---");
const extraInfo = { location: "Surat", hobbies: ["Coding", "Cooking"] };
console.log(mergeObjects(person, extraInfo));

console.log("\n--- 10. Sum of Array ---");
console.log("Total Sum:", calculateSum(data));
