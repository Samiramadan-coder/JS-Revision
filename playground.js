// variables are placeholders to store information and data in you app
// the variable refer to the value store in it.
// operators are used to assign values, compare values, perform arithmatic operations.

/*
name = "Sami Ramadan";
console.log(name);

food = Number(prompt("How much was the food?"));
tipPercentage = Number(prompt("tip %?")) / 100;
tipAmount = food * tipPercentage;
total = food + tipAmount;

console.log('tip', tipAmount);
console.log('total', total);
alert(tipAmount);
*/

/*
================================================
====  ( Chapter 02: Baby Weather App) =====
================================================
*/

/*
data types 
numbers - strings - arrays - objects - boolean
*/

/*
Math Operators
Multiply * 
Divide / 
Exponent ** 
Modulus %
Add  +
Subtract -
*/

/*
Math Methods
floor rounds down
ceil rounds up
random gives you number between 0 and 1
*/

// Baby waether app
// if rain 'Grab your umberella'
// else 'Wear your sunglasses'
/*
let weather = prompt('How is the weather?');

if (weather == 'rainy') {
  console.log('Grab your umberella');
} else {
  console.log('Wear your sunglasses');
}
*/

/*
================================================
====  ( Chapter 03: Functions) =====
================================================

A JavaScript function is a block of code designed to perform a particular task and is
excuted when "something" calls it.

function argument are the values recived by the function when it is called, they behave 
as avariable, however they only live within the function and cannot be accessed outside.

Template literals provide an easy way to interpolate variables and expressions into strings
Interpolation is an efficient way of concatinations

The return statement makes the function reusable, you can use the same function in multiple places
*/

function sayMyName() { // no arguments
  console.log('Sami');
}

// sayMyName();

function sayMyName2(name) { // one argument
  console.log(name);
}

// sayMyName2('Amr');

function greeting(name) {
  console.log(`hi ${name}, nice to meet you!`);
}

// greeting('Khadija');
// greeting('Amani');


function sum(a, b) {
  return a + b;
  // console.log(a + b);
}

//   console.log(sum(1, 2));

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = sum(food, tipAmount);

  return total;
}

// console.log(calculateFoodTotal(300, 20));

// ES6
// Arrow functions =>
// Arrow function with explicit return
const sumArrow = (a, b) => a + b;
console.log(sumArrow(1, 2));

// food = Number(prompt("How much was the food?"));
// console.log('tip', tipAmount);
// console.log('total', total);
