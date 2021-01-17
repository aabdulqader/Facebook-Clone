import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidbarRightRow.css";
const SidbarRightRow = ({ name }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="sidbarRightRow">
      <Avatar
        src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        className="sidbarRightRow__avatar"
      />
      <h3>{name}</h3>
    </div>
  );
};

export default SidbarRightRow;
