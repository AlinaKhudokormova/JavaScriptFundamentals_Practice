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