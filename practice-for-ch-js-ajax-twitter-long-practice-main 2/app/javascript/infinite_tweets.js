import { API } from "./util";

export default class InfiniteTweets {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.button = document.querySelector(".fetch-tweets-btn");
    this.tweets = document.querySelector(".tweets");
    this.button.addEventListener("click", this.handleFetchTweets.bind(this));
  }

  async handleFetchTweets(event) {
    event.preventDefault();
    const res = await API.fetchTweets({
      type: this.rootEl.dataset.type, 
      offset: document.getElementsByName("limit")[0].value
    })
    this.appendTweet(res);
    // Remove fetch tweets button if you've run out of tweets to fetch
    if (res.length < 10) {
      const noMoreTweets = document.createElement("p");
      noMoreTweets.innerText = "No more tweets!";
      this.button.replaceWith(noMoreTweets);
    }
  }

  appendTweet(tweetData) {
    const tweetEl = this.createTweet(tweetData);
    this.tweets.appendChild(tweetEl);
  }

  createTweet(tweetData) {
    const li = document.createElement("li");
      
    return li;
  }

  // Helper methods...
}