const states = [
  "Andhra Pradesh",
  "Bihar",
  "Goa",
  "Gujarat",
  "Haryana",
  "Odisha",
  "Uttar Pradesh",
  "Sikkim",
];

const filteredStates = states.filter((state) => {
  const firstLetter = state[0].toLowerCase();
  return !["a", "e", "i", "o", "u"].includes(firstLetter);
});

console.log(filteredStates);
