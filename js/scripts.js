// Begin Business Logic

function pingPong(number) {

  arrayNumbers = [];

  for (var i = 0; i <= number - 1; i++) {
    arrayNumbers.push(i + 1);
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
  };
  return arrayNumbers;
};

// Begin User Interface Logic
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();

    inputNumber = parseInt($("#userNumberInput").val());

    pingPong(inputNumber);
    $("#output").append("<li>" + arrayNumbers[0] + "</li>");
  });
});



// THE FOLLOWING ACTUALLY WORKS UGH
// $(document).ready(function() {
//   $("form#userInputForm").submit(function(event) {
//     event.preventDefault();
//
//     var number = parseInt($("#userNumberInput").val());
//     var arrayNumbers = [];
//
//     for (var i = 0; i <= number - 1; i++) {
//       arrayNumbers.push(i + 1);
//       if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
//         arrayNumbers.pop();
//         arrayNumbers.push("pingpong");
//       }
//       if (arrayNumbers[i] % 3 === 0) {
//         arrayNumbers.pop();
//         arrayNumbers.push("ping");
//       }
//       if (arrayNumbers[i] % 5 === 0) {
//         arrayNumbers.pop();
//         arrayNumbers.push("pong");
//       }
//       $("#output").append("<li>" + arrayNumbers[i] + "</li>");
//     };
//   });
// });
