import * as React from "react";
import * as ReactDOM from "react-dom";
import { DashboardMenu } from "./dashboard/dashboard-menu/dashboard-menu";
import { MenuItem } from "./common/menu-item/menu-item";

ReactDOM.render(
  <DashboardMenu onSelectionChanged={console.log}>
    <MenuItem name="project">Project</MenuItem>
    <MenuItem name="build">Build</MenuItem>
    <MenuItem name="git">Git</MenuItem>
    <MenuItem name="about">About</MenuItem>
  </DashboardMenu>,
  document.getElementById("application")
);
