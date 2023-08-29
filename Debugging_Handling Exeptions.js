//Task 1
function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error("There must be numbers");
  }
  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error("Numbers are out of bounds");
  }
  return arr[first] + arr[second];
}
try {
  const inputArray = [1, 2, 3, 4, 5, 6, 7];
  const firstIndex = 1;
  const secondIndex = 5;
  const result = sumSliceArray(inputArray, firstIndex, secondIndex);
  console.log(`Sum of elements at index ${firstIndex} and ${secondIndex}: ${result}`);
} catch (error) {
  console.error("An error occurred:", error.message);
}

//Task 2
function checkAge() {
  try {
    const name = prompt("Please enter your name:");
    if (!name) {
      throw new Error("The field is empty! Please enter your name");
    }
    const age = parseInt(prompt("Please enter your age:"));
    if (isNaN(age)) {
      throw new EvalError("Age is not a number");
    }
    if (age < 18 || age > 70) {
      throw new RangeError("Age should be between 18 and 70");
    }
    const status = prompt("Please enter your status (admin, moderator, user):");
    if (!status || !["admin", "moderator", "user"].includes(status.toLowerCase())) {
      throw new EvalError("Invalid status entered");
    }
    alert("You have access to watch the movie!");
  } catch (error) {
    if (error instanceof RangeError) {
      alert("Error: " + error.name + "\n" + error.message);
    } else if (error instanceof EvalError) {
      alert("Error: " + error.name + "\n" + error.message);
    } else {
      alert("Error: " + error.message);
    }
  }
}
checkAge();


//Task 3
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error("Both width and height must be numbers");
  }
  return width * height;
}
try {
  const width = parseFloat(prompt("Enter the width of the rectangle:"));
  const height = parseFloat(prompt("Enter the height of the rectangle:"));
  const area = calcRectangleArea(width, height);
  if (isNaN(area)) {
    throw new Error("Invalid width or height entered");
  }
  console.log(`The area of the rectangle is: ${area}`);
} catch (error) {
  console.error("An error occurred:", error.message);
}

//Task 4
class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }
  return months[month - 1];
}
try {
  console.log(showMonthName(5));  // checking
  console.log(showMonthName(14)); // checking
} catch (error) {
  if (error instanceof MonthException) {
    console.log(`${error.name} ${error.message}`);
  } else {
    console.error("An error occurred:", error.message);
  }
}

//Task 5
function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative");
  }
  return { id };
}
function showUsers(ids) {
  const validUsers = [];
  const invalidMessages = [];

  for (const id of ids) {
    try {
      validUsers.push(showUser(id));
    } catch (error) {
      invalidMessages.push(error.message);
    }
  }
  if (invalidMessages.length > 0) {
    for (const message of invalidMessages) {
      console.error("Error:", message);
    }
  }
  return validUsers;
}
const users = showUsers([7, -12, 44, 22]);
console.log(users);
