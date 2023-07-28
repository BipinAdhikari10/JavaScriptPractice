function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year = 2024;
console.log(year + " is a leap year? " + isLeapYear(year));
