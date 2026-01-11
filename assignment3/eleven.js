const input = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  },
];

const output = input.map((item) => {
  const studentKey = Object.keys(item)[0];
  const scores = Object.values(item[studentKey]);
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

  return { [studentKey]: { average: avg } };
});

console.log(output);
