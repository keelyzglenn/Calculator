 //For Addition
var add = function(number1, number2) {
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var addResult = add(number1, number2);

alert(addResult);

// For Subtraction
var sub = function(number1, number2) {
	return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var subResult = sub(number1, number2);

alert(subResult);

// For Multiplication
var mult = function(number1, number2) {
	return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var multResult = mult(number1, number2);

alert(multResult);

// For Division
var div = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter another number"));
var divResult = div(number1, number2);

alert(divResult);
