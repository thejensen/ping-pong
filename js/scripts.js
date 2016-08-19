// Begin Business Logic

arrayNumbers = [];

function pingPong(number) {
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
};

// User Interface Logic

$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#userNumberInput").val());

    if (isNaN(inputNumber) === true) {
      alert("Please Enter a Number!");
    } if (inputNumber < 1) {
      alert("Please Enter a Number 1 or greater!")
    } else {
      pingPong(inputNumber);
      for (var i = 0; i < arrayNumbers.length; i++) {
        $("#outputList").append("<li>" + arrayNumbers[i] + "</li>");
        $('html, body').animate( {
          scrollTop: $("#outputList").offset().top
        }, 2000);
      }
    }
  });
});
