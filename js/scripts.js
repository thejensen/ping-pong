// Begin Business Logic

// Begin User Interface Logic
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#userNumberInput").val());
    var arrayNumbers = [];


    for (var i = 0; i <= number - 1; i++) {
      arrayNumbers.push(i + 1);
      console.log(arrayNumbers);
      if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
        arrayNumbers.pop();
        arrayNumbers.push("pingpong");
      }
      if (arrayNumbers[i] % 3 === 0) {
        arrayNumbers.pop();
        arrayNumbers.push("ping");
      }
      if (arrayNumbers[i] % 5 === 0) {
        arrayNumbers.pop();
        arrayNumbers.push("pong");
      }
      $("#output").append("<li>" + arrayNumbers[i] + "</li>");
    };




  });
});


// Satisfies criteria 1-2 and 8a (numbers in a list...)
// $(document).ready(function() {
//   $("form#userInputForm").submit(function(event) {
//     event.preventDefault();
//
//     var number = parseInt($("#userNumberInput").val());
//     var arrayNumbers = [];
//
//     for (var i = 0; i <= number - 1; i++) {
//       arrayNumbers.push(i + 1);
//
//     }
