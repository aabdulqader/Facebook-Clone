import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarLeft.css";
import SidebarLeftRow from "./SidebarLeftRow/SidebarLeftRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import TurnedInRoundedIcon from "@material-ui/icons/TurnedInRounded";

import GroupWorkRoundedIcon from "@material-ui/icons/GroupWorkRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";

import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";

import BusinessCenterRoundedIcon from "@material-ui/icons/BusinessCenterRounded";
import EventRoundedIcon from "@material-ui/icons/EventRounded";

import WorkRoundedIcon from "@material-ui/icons/WorkRounded";

import AvTimerIcon from "@material-ui/icons/AvTimer";
import CloudIcon from "@material-ui/icons/Cloud";

import FlagIcon from "@material-ui/icons/Flag";

const options = [
  {
    Icon: LocalHospitalIcon,
    title: "COVID-1p Information Center",
  },
  {
    Icon: PeopleAltRoundedIcon,
    title: "Friends ",
  },
  {
    Icon: OndemandVideoRoundedIcon,
    title: "Watch ",
  },
  {
    Icon: TurnedInRoundedIcon,
    title: "Save ",
  },
  {
    Icon: GroupWorkRoundedIcon,
    title: "Groups ",
  },
  {
    Icon: StoreMallDirectoryRoundedIcon,
    title: "Marketplace ",
  },
  {
    Icon: EqualizerRoundedIcon,
    title: "Ads ",
  },
  {
    Icon: BusinessCenterRoundedIcon,
    title: "Business Manager ",
  },
  {
    Icon: EventRoundedIcon,
    title: "Event",
  },
  {
    Icon: WorkRoundedIcon,
    title: "Jobs ",
  },
  {
    Icon: AvTimerIcon,
    title: "Memories",
  },
  {
    Icon: FlagIcon,
    title: "Pages ",
  },
  {
    Icon: CloudIcon,
    title: "Weather",
  },
];

const SidebarLeft = ({ user }) => {
  return (
    <div className="sidebarLeft">
      <div className="sidebarLeft__user">
        <Avatar className="sidebar__user" alt="" src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>
      {options.map(({ title, Icon }, index) => (
        <SidebarLeftRow key={index} title={title} Icon={Icon} />
      ))}
    </div>
  );
};

export default SidebarLeft;
