$(document).ready(function() {
  // --- our code goes here ---
  console.log("This is the composer-char-counter.js!");;
  // $("#tweet-text").hide();

  $("#tweet-text").on('input', function() {
    let textCounter = 140 - ($(this).val()).length;

    textCounter < 0 ? $('#counter').css("color", 'red') : $('#counter').css("color", '#545149');

    $('#counter').text(textCounter);
  });
});
