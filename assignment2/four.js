function sumOfProductOfDigits(n1, n2) {
  let s1 = n1.toString();
  let s2 = n2.toString();

  let sum = 0;
  let i = s1.length - 1;
  let j = s2.length - 1;

  while (i >= 0 || j >= 0) {
    let d1 = i >= 0 ? parseInt(s1[i]) : 0;
    let d2 = j >= 0 ? parseInt(s2[j]) : 0;

    sum += d1 * d2;

    i--;
    j--;
  }

  return sum;
}
console.log(sumOfProductOfDigits(6, 34));
console.log(sumOfProductOfDigits(12, 34));
