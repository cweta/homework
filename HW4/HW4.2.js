function checkAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age is not a Number");
  }
  if (age >= 14) {
    return true;
  } else {
    return confirm("You are too young");
  }
}

let age = prompt("How old are you", 14);

try {
  if (checkAge(age)) {
    alert("Access granted");
  } else {
    alert("Access closed");
  }
} catch (error) {
  alert("The field is empty! Please enter your age");
}