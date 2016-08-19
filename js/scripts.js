// Begin Business Logic



// Begin User Interface Logic
$(document).ready(function() {
  $("form#userInputForm").submit(function(event) {
    event.preventDefault();

    var numberInput = $("#userNumberInput").val();
    console.log(numberInput);

  });
});
