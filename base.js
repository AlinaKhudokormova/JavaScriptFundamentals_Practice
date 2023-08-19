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
  // Create an object to store the frequency of each number
  const numFrequency = {};

  // Calculate the frequency of each number
  numsArr.forEach(num => {
    numFrequency[num] = (numFrequency[num] || 0) + 1;
  });

  // Find the most often included number and its frequency
  let mostCommonNumber;
  let maxFrequency = 0;

  for (const num in numFrequency) {
    if (numFrequency[num] > maxFrequency) {
      mostCommonNumber = num;
      maxFrequency = numFrequency[num];
    }
  }

  // Create the new array without occurrences of the most common number
  const filteredArray = numsArr.filter(num => num !== mostCommonNumber);

  return filteredArray;
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

