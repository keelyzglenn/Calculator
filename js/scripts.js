 //For Addition
 //business (or back-end) logic:
 var add = function(number1, number2) {
   return number1 + number2;
 };

 var subtract = function(number1, number2) {
   return number1 - number2;
 };

 var multiply = function(number1, number2) {
   return number1 * number2;
 };

 var divide = function(number1, number2) {
   return number1 / number2;
 };

//Everything below this line is user interface (front end) logic:
$(document).ready(function() {
	$("#add form").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		alert(add(number1, number2));
	});
});


// // For Subtraction
// var sub = function(number1, number2) {
// 	return number1 - number2;
// };
//
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// var subResult = sub(number1, number2);
//
// alert(subResult);
//
// // For Multiplication
// var mult = function(number1, number2) {
// 	return number1 * number2;
// };
//
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// var multResult = mult(number1, number2);
//
// alert(multResult);
//
// // For Division
// var div = function(number1, number2) {
// 	return number1 / number2;
// };
//
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter another number"));
// var divResult = div(number1, number2);
//
// alert(divResult);
