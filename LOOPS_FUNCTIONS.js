//Task 1
function createArray(start, end) {
  const resultArray = [];
  for (let i = start; i <= end; ++i) {
    resultArray.push(i);
  }
  return resultArray;
}
createArray();

//Task 2
function numbers(a, b) {
for (let i = a; i < b; ++i) {
  for (let k = a; k <= i; ++k) {
    console.log(i);
  }
  }
}
numbers();

//Task 3
function randArray(k) {
  const resultArrayRandom = [];
  for (let i = 0; i < k; ++i) {
    const randomNumbers = Math.round(Math.random() * 500)+1;
    resultArrayRandom.push(randomNumbers);
  }
  return resultArrayRandom;
}
randArray();

//Task 4


