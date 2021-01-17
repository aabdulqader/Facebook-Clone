import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";
const Story = ({ image, username, userSrc }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={userSrc} />
      <h4>{username}</h4>
    </div>
  );
};

export default Story;
