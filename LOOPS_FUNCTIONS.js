//Task 1
function createArray(start, end) {
  const resultArray = [];
  for (let i = start; i <= end; ++i) {
    resultArray.push(i);
  }
  return resultArray;
}
createArray();
let arr = createArray(2, 9); //cheking
console.log(arr); //cheking

//Task 2
function numbers(a, b) {
  let allNumbers = '';
  for (let i = a; i <= b; ++i) {
    for (let k = 0; k < i; ++k) {
      allNumbers += i + ' ';
    }
  }
  console.log(allNumbers);
}
numbers(1, 8); //cheking

//Task 3
function randArray(k) {
  const resultArrayRandom = [];
  for (let i = 0; i < k; ++i) {
    const randomNumbers = Math.round(Math.random() * 500) + 1;
    resultArrayRandom.push(randomNumbers);
  }
  return resultArrayRandom;
}
randArray();
console.log(randArray(6)); //cheking

//Task 4

