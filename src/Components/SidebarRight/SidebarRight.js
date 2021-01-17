import { BorderBottom } from "@material-ui/icons";
import React from "react";
import SidbarRightRow from "./SidbarRightRow/SidbarRightRow";
import "./SidebarRight.css";

const users = [
  { name: "Donald Trump" },
  { name: "Barak Obama" },
  { name: "Joe Biden" },
  { name: "Jeff Bezos" },
  { name: "Warren Buffett" },
  { name: "Mark Zuckerberg" },
  { name: "	Amancio Ortega" },
  { name: "	Sergey Brin" },
  { name: "	Larry Page" },
  { name: "Mukesh Ambani" },
  { name: "	Steve Ballmer" },
  { name: "Alice Walton" },
  { name: "Michael Bloomberg" },
  { name: "Jim Walton" },
  { name: "Robson Walton" },
  { name: "Larry Ellison" },
  { name: "	Phil Knight" },
  { name: "Elon Musk" },
  { name: "Ma Huateng" },
  { name: "	Charles Koch" },
  { name: "		Giovanni Ferrero" },
  { name: "		Xu Jiayin" },
  { name: "	Sheldon Adelson" },
  { name: "		Li Ka-shing" },
  { name: "		Lee Shau Kee" },
  { name: "		Dieter Schwarz" },
  { name: "		James Simons" },
  { name: "		Ding Lei" },
  { name: "	Wang Wei" },
  { name: "		Eric Schmidt" },
];

const SidebarRight = () => {
  return (
    <div className="sidebarRight">
      <h3 style={{ padding: "15px" }}>Active Friends</h3>

      {users.map((user) => (
        <SidbarRightRow name={user.name} />
      ))}
    </div>
  );
};

export default SidebarRight;
