function findTax(salary) {
  let taxAmount;

  switch (true) {
    case salary > 0 && salary <= 500000:
      taxAmount = 0;
      break;
    case salary > 500000 && salary <= 1000000:
      taxAmount = salary * 0.1;
      break;
    case salary > 1000000 && salary <= 1500000:
      taxAmount = salary * 0.2;
      break;
    case salary > 1500000:
      taxAmount = salary * 0.3;
      break;
    default:
      return "Invalid salary amount";
  }

  return `The tax amount on ${salary} is: ${taxAmount}`;
}

console.log(findTax(1200000));
