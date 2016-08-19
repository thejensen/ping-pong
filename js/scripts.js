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
    pingPong(inputNumber);

    list = $("#outputList");
    for (var i = 0; i < arrayNumbers.length; i++) {
      list.append("<li>" + arrayNumbers[i] + "</li>");
    }

  });
});
