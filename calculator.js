// Importing the 'readline' module to read input from the command line
const readline = require('readline');

// Creating an interface to read input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
  return a * b;
}

// Function to perform division
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Function to calculate based on operator
function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

// Getting user input for operator, operand 1, and operand 2
rl.question("Enter operator (+, -, *, /): ", function(operator) {
  rl.question("Enter operand 1: ", function(operand1) {
    rl.question("Enter operand 2: ", function(operand2) {
      const result = calculate(operator, parseFloat(operand1), parseFloat(operand2));
      console.log("Result:", result);
      rl.close();
    });
  });
});
