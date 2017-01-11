 //For Addition
 //business (or back-end) logic:
 var add = function(number1, number2) {
   return number1 + number2;
 };

 var sub = function(number3, number4) {
   return number3 - number4;
 };

 var mult = function(number5, number6) {
   return number5 * number6;
 };

 var div = function(number7, number8) {
   return number7 / number8;
 };

//Everything below this line is user interface (front end) logic:
$(document).ready(function() {
// For Additon
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var addResult = add(number1, number2);
		$("#addAnswer").text(addResult);
	});
// For Subtraction
	$("form#sub").submit(function(event){
		event.preventDefault();
		var number3 = parseInt($("#sub1").val());
		var number4 = parseInt($("#sub2").val());
		var subResult =	sub(number3, number4);
		$("#subAnswer").text(subResult);
	});

// For Multiplication
	$("form#mult").submit(function(event) {
		event.preventDefault();
		var number5 = parseInt($("#mult1").val());
		var number6 = parseInt($("#mult2").val());
		var multResult = mult(number5, number6);
		$("#multAnswer").text(multResult);
	});

// For Division
	$("form#div").submit(function(event){
		event.preventDefault();
		var number7 = parseInt($("#div1").val());
		var number8 = parseInt($("#div2").val());
		var divResult = div(number7, number8);
		$("#divAnswer").text(divResult);
	});
});
