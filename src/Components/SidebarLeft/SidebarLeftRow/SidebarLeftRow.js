import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarLeftRow.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const SidebarLeftRow = ({ title, Icon }) => {
  return (
    <div className="sidebarLeftRow">
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarLeftRow;
