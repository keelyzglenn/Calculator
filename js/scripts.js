 //For Addition
 //business (or back-end) logic:
 var add = function(number1, number2) {
   return number1 + number2;
 };

 var sub = function(number3, number4) {
   return number3 - number4;
 };

 var mult = function(number1, number2) {
   return number1 * number2;
 };

 var divide = function(number1, number2) {
   return number1 / number2;
 };

//Everything below this line is user interface (front end) logic:
$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var addResult = add(number1, number2);
		$("#addAnswer").text(addResult);
	});

	$("form#sub").submit(function(event){
		event.preventDefault();
		var number3 = parseInt($("#sub1").val());
		var number4 = parseInt($("#sub2").val());
		var subResult =	sub(number3, number4);
		$("#subAnswer").text(subResult);

	});
});













// For Multiplication
//
// 	$("form#mult").submit(function(event) {
// 		event.preventDefault();
// 		var number1 = parseInt($("#mult1").val());
// 		var number2 = parseInt($("#mult2").val());
// 		var multResult = mult(number1, number2);
// 		$("#multAnswer").text(multResult);
// 	});
// });

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
