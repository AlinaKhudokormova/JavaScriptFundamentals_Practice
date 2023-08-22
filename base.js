/*//1. INTRODUCTION TO JAVASCRIPT
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
}*/

//Task 2
const numbers = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5, 8, 8, 8, 8,8,8,8, 9, 9,9,9,9];
const sorted = numbers.sort((a,b) => a-b);
const res = sorted.filter ((x,i) => x === sorted [i+1]);
/*function countOccurrences(res) {
  return res.reduce((occurrences, element) => {
    occurrences[element] = (occurrences[element] || 0) + 1;
    return occurrences;
  }, {});
}
const maxKey = Math.max(...Object.keys(occurrences).map(Number));
const newArray = [];
newArray.push(maxKey);
const numberToDelete = maxKey;
const newArrayWithoutNumber = numbers.filter(number => number !== numberToDelete);
*/
console.log (sorted);
console.log (res);
const maxOccurences = res.reduce(previous,current);
console.log (maxOccurences);






/*// 1 + 2 + 3 = 6
const summ = numbers.reduce((result, current) => result + current, 0);
console.log("Summ:", summ);

// [r]ed + [g]reen + [b]lue = rgb
const letters = colors.reduce((r, c) => r + c[0], '');
console.log("Letters:", letters);



// ----- TASK: find max element in the array
numbers = [4, 1, 0, -2, 10, 23, 17, 11];

// max:  23 
// curr: 17

let max = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0]);
console.log(max);*/
