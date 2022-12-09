$(document).ready(function() {
  // --- our code goes here ---
  // console.log("This is the icon-colour-changer.js!");;

  // Come back to doing it with more efficient code

  $(".tweets").on('mouseover', function() {
    $(".tweets").css('box-shadow', '3px 3px lightgray');
  })

  $(".tweets").on('mouseout', function() {
    $(".tweets").css('box-shadow', 'none');
  })


  // first icon
  $(".fa-flag").on('mouseover', function() {
    $('.fa-flag').css('color', 'darkgoldenrod');
  });

  $('.fa-flag').on('mouseout', function() {
    $('.fa-flag').css('color', '#4056A1');
  })

  // second icon
  $(".fa-retweet").on('mouseover', function() {
    $('.fa-retweet').css('color', 'darkgoldenrod');
  });

  $('.fa-retweet').on('mouseout', function() {
    $('.fa-retweet').css('color', '#4056A1');
  })

  // third icon
  $(".fa-heart").on('mouseover', function() {
    $('.fa-heart').css('color', 'darkgoldenrod');
  });

  $('.fa-heart').on('mouseout', function() {
    $('.fa-heart').css('color', '#4056A1');
  })
});
