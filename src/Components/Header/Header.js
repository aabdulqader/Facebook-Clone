import React from "react";
import "./Header.css";
import logo from "../../logo.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import AddIcon from "@material-ui/icons/Add";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Avatar, IconButton } from "@material-ui/core";
const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeRoundedIcon />
        </div>
        <div className="header__option">
          <OndemandVideoRoundedIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <GroupAddRoundedIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar className="header__user" alt="" src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <QuestionAnswerIcon />
        </IconButton>
        <IconButton>
          <NotificationsSharpIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
