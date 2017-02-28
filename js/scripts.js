$(document).ready(function() {
 $("form").submit(function(event) {
   event.preventDefault();

   var color = $("#color").val();
   var number = $("#number").val();
   var animal = $("#animal").val();
   var food = $("#food").val();
   var season = $("#season").val();

   var originalArray = [color, number, animal, food, season];
   var array = [];
   array.push(originalArray[1]);
   array.push(originalArray[0]);
   array.push(originalArray[2]);
  alert(array);
 });
});
