function checkAge(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

let age = +prompt("How old are you");

try {
  if (isNaN(age)) {
    alert("Age is not a Number");
  } else if (checkAge(age)) {
    alert("Access granted");
  } else {
    alert("Access closed");
  }
} catch (error) {
  alert("The field is empty! Please enter your age");
}