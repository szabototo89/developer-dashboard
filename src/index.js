import * as React from "react";
import * as ReactDOM from "react-dom";
import { DashboardMenu } from "./dashboard/dashboard-menu/dashboard-menu";
import { MenuItem } from "./common/menu-item/menu-item";
import { Icon } from "./common/icon/icon";

ReactDOM.render(
  <DashboardMenu onSelectionChanged={console.log}>
    <MenuItem name="project">
      <Icon type="project-diagram" />
      Project
    </MenuItem>
    <MenuItem name="build">
      <Icon type="code" />
      Build
    </MenuItem>
    <MenuItem name="git">
      <Icon type="code-branch" />
      Git
    </MenuItem>
  </DashboardMenu>,
  document.getElementById("application")
);
