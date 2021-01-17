import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import like from "./like.svg";
import love from "./love.svg";
import care from "./care.svg";

import { useStateValue } from "../../../ContextData/StateProvider";
const Post = ({ profilePic, image, username, timestamp, text }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{text}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__reacts">
        <div className="post__react">
          <img src={like} alt="" />
          <img src={love} alt="" />
          <img src={care} alt="" />
          <p>989</p>
        </div>
        <p>
          <span>389 Comments</span> 55 Shares
        </p>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <Avatar src={user.photoURL} className="post__optionAvatar" />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
