import React from "react";
import Group92 from "../Group92";
import Group14 from "../Group14";
import Group20 from "../Group20";
import Group19 from "../Group19";
import Group18 from "../Group18";
import "./Group752.css";

function Group752(props) {
  const { group92Props, group14Props, group20Props, group19Props } = props;

  return (
    <div className="group-75-6">
      <Group92 className={group92Props.className} />
      <Group14 className={group14Props.className} />
      <Group20 className={group20Props.className} />
      <Group19 className={group19Props.className} />
      <Group18 />
    </div>
  );
}

export default Group752;
