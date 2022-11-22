import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import Maleavatar from "../Images/male_avatar.png";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src={Maleavatar} />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox_imageinput"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button className="tweetBox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
