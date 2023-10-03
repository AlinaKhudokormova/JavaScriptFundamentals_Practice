class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  month = month - 1;
  let months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  if (months[month] !== undefined) {
    return months[month];
  } else {
    throw new MonthException("Incorrect month number");
  }
}
try {
  showMonthName(13);
} catch (e) {
  alert (e instanceof Error);
  alert (e.message);
  alert (e.name);
}
