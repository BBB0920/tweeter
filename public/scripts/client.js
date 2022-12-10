/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Article class is tweets in index.html
$(document).ready(function() {
  const createTweetElement = function(info) {
    return $(`
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
            ${info.content.text}
          </div>
        </div>
        <footer class="otFooter">
          <txt class="texts">${info.created_at}</txt>
          <div class="icons">
            <i class="fa-solid fa-flag botIcon"></i>
            <i class="fa-solid fa-retweet botIcon"></i>
            <i class="fa-solid fa-heart botIcon"></i>
          </div>
        </footer>
      </article>
      <br>
    `);
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
      "created_at": 1461116232227
    },

    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis" 
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    for (let i of tweets) {
      let $tweet = createTweetElement(i);
      $('.old-tweet').append($tweet);
    }
  }

  renderTweets(data);
})
