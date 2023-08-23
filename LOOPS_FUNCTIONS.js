/*//Task 1
function createArray(start, end) {
  const resultArray = [];
  for (let i = start; i <= end; ++i) {
    resultArray.push(i);
  }
  return resultArray;
}
createArray();
//cheking
let arr = createArray(2, 9);
console.log(arr);

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
//cheking
numbers(1, 8);

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
//cheking
console.log(randArray(6));

//Task 4
function compact(arr) {
  const filtredArr = [];
  for (const i of arr) {
    if (!filtredArr.includes(i)) {
      filtredArr.push(i);
    }
  }
  return filtredArr;
}
//cheking
const arrTaskFour = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arrTaskFour);
console.log(arr2);

//Task 5
function funcName(arr) {
  const numberArr = [];
  const stringArr = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      numberArr.push(...item.filter(subItem => typeof subItem === 'number' && !isNaN(subItem)));
      stringArr.push(...item.filter(subItem => typeof subItem === 'string'));
    } else if (typeof item === 'number' && !isNaN(item)) {
      numberArr.push(item);
    } else if (typeof item === 'string') {
      stringArr.push(item);
    }
  }

  return [numberArr, stringArr];
}
//cheking
const arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
const arrNew = funcN//chekingame(arr);
console.log(arrNew);

//Task 6
function calc(a, b, op) {
 let result;
  if (op === 1){
    result = a - b;
  } else if(op === 2) {
    result = a * b;
  } else if (op === 3) {
    result = a / b;
  } else {
    result = a + b;
  }
  return result;
}
//cheking
console.log(calc(10, 3, 3));
*/
//Task 7
function findUnique(arr) {
  const uniqueSet = new Set();

  for (const item of arr) {
    if (uniqueSet.has(item)) {
      return false;
    }
    uniqueSet.add(item);
  }
  return true;
}
//checking
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));