function countWords(para) {
  return para.trim().split(/\s+/).length;
}

console.log(countWords("Hello world from JavaScript!"));
