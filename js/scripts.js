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
	$("form#calculator").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
		var result ;
    if (operator === "add") {
      result= add(number1, number2);
    } else if (operator === "subtract") {
      result= sub(number1, number2);
    } else if (operator === "multiply") {
      result= mult(number1, number2);
    } else if (operator === "divide") {
      result= div(number1, number2);
    }
    $("#output").text(result);
	});
});
