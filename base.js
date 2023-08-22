//1. INTRODUCTION TO JAVASCRIPT
//Task 1
const secMinute = 60;
const secH = secMinute * 60;
const secD = secH * 24;
const secM = secD * 31;

//Task 2
const dataTypes = {
  "String": "Hello JS!",
  "Number": 8,
  "Boolean": true,
  "Undefined": undefined,
  "NULL": null,
  "Big_Int": 123456789122345678n
};

//Task 3
const userLogin = prompt ("Please write your login", "Star");
const userEmail = prompt ("Please write your email", "star1234@gmail.com");
const userPassword = prompt ("Please write your password", "55555");
const message = alert (`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}`);

//Task 4
const isAdult = confirm ("Are you of legal age?");

//Task 5
const myName = alert ("Alina");

//2.OPERATORS. TYPE CONVERSIONS. ARRAYS. CONDITIONAL STATEMENT
//Task 1 
const validateAge = age => {
  if (age>=18) {
    console.log ("You are of legal age");
  } else {
    console.log ("You are too young");
  }
}

//Task 2
const filterMostOftenNumber = numsArr => {
  const forSorted = numsArr.slice();
  const sorted =  forSorted.sort((a,b) => a-b);
  const res = sorted.filter ((x,i) => x === sorted [i+1]);
    if (res.length === 0) {
      return [];
    }
  const count = {};
  for (let elem of res) {
      if (count[elem] === undefined) {
      count[elem] = 1;
      } else {
      count[elem]++;
      }
  }
  const maxKey = Object.entries(count).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]
  const newArray = [];
  newArray.push(+maxKey);
  const numberToDelete = +maxKey;
  function createArrayWithoutMaxKey(numsArr, numberToDelete) {
    return numsArr.filter(element => element !== numberToDelete);
  }
  const ArrayWithoutMaxKey = createArrayWithoutMaxKey(numsArr, numberToDelete);
      return ArrayWithoutMaxKey;
  }
  
//Task 3
const primeNumbers = numsArr => {
  const newNumsArr = [];
  for (const num of numsArr) {
    if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 || num % 13 === 0) {
      newNumsArr.push(num);
    }
  }
  return newNumsArr;
}

//Task 4
const triangleArea = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    return 'Incorrect data';
  }
  const semiPerimeter = (a + b + c) / 2;
  const triangleArea = Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
  return triangleArea.toFixed(3);
}

//Task 5
const greetings = time => {
  if (time >= 23 || time <= 5) {
    return "Good night";
  } else if (time >= 5 && time <= 11) {
    return "Good morning";
  } else if (time >= 11 && time <= 17) {
    return "Good afternoon";
  } else if (time >= 17 && time <= 23) {
    return "Good evening";
  }
}

