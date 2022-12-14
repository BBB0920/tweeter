/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Article class is tweets in index.html

$(document).ready(function() {

  const createTweetElement = function(info) {

    const escape = function (str) {
      let div = document.createElement("div");  
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    return `
      <article class="tweets">
        <h1 class="otHeader">
          <div class="name">
            <img src="${info.user.avatars}" width="25" height="25">
            ${info.user.name}
          </div>  
          <div class="id">${info.user.handle}</div>
        </h1>
        <div class="otBody">
          <div class="otContent">
            ${escape(info.content.text)}
          </div>
        </div>
        <footer class="otFooter">
          <txt class="texts">${timeago.format(info.created_at)}</txt>
          <div class="icons">
            <i class="fa-solid fa-flag botIcon"></i>
            <i class="fa-solid fa-retweet botIcon"></i>
            <i class="fa-solid fa-heart botIcon"></i>
          </div>
        </footer>
      </article>
    `;
  }

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": `${timeago.format(1461116232227)}`
    },

    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis" 
      },
      "created_at": `${timeago.format(1461113959088)}`
    }
  ]

  // Rendering tweets from pre-determined database
  const renderTweets = function(tweets) {
    for (let i = tweets.length - 1; i >= 0; i--) {
      let $tweet = createTweetElement(tweets[i]);
      $('.old-tweet').append($tweet);
    }
  }

  // Generates error message
  const errMsg = function(Error) {
    let errSntc = [
      'You have not entered any message. Please write something!',
      'Message is too long! Please write within the character limit. '
    ];

    $('.error').remove();
    $('#target').prepend(`
    <div class=error>
      <i class="fa-solid fa-triangle-exclamation"></i>
      ${errSntc[Error]}
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>
    `);
    $('.error').hide().slideDown("slow");
  }

  // Sending information to /tweets using AJAX
  $('#target').on('submit', function (event) {

    event.preventDefault();

    if ($("#tweet-text").val().length < 1) {
      errMsg(0);
    } else if ($("#tweet-text").val().length > 140) {
      errMsg(1);
    } else {
      $('.error').slideUp("slow");
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $('#target').serialize()
      })
      .then(() => {
        $(".tweets").remove();
        $('#tweet-text').val('');
        loadTweets();
      })
    }
  })

  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
    .then(function (data) {
      renderTweets(data);
    })
  }

  loadTweets();
})
