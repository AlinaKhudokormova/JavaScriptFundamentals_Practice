function checkAge() {
  const age = prompt("Type your age");
  if (age < 18 || age > 70) {
    throw new RangeError("Please check your information about your age");
  }
  if (age === "") {
    throw new Error("The field is empty!");
  }
  if (typeof age === isNaN) {
    throw new TypeError("You have entered non-numeric value")
  }
  const status = prompt("Choose your status:admin, moderator, user");
  if (status !== "admin" && status !== "moderator" && status !== "user") {
    throw new EvalError("Please check your information about your status");
  }
  const name = prompt("Type your name");
  if (status === "" || name === "" || age === "") {
    throw new Error("The field is empty!");
  }
  return alert("You can watch a movie!")
}
try {
  checkAge()
} catch (error) {
  console.log(error.message);
}
