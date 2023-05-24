import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault();
    // console.log(this.toggleButton.dataset.followState);
    if (this.toggleButton.dataset.followState === "followed") {
      this.unfollow;
    } else {
      this.follow;
    }
  }

  async follow() {
    this.followState("following");
    await API.followUser(this.toggleButton.dataset.userId);
    this.followState("followed");
  }

  async unfollow() {
    this.followState("unfollowing");
    await API.unfollowUser(this.toggleButton.dataset.userId);
    this.followState("unfollowed");
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
    console.log(this.followState);
  }
}