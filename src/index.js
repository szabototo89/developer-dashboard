import * as React from "react";
import * as ReactDOM from "react-dom";
import { DashboardMenu } from "./dashboard/dashboard-menu/dashboard-menu";
import { DashboardMenuItem } from "./dashboard/dashboard-menu-item/dashboard-menu-item";
import { Icon } from "./common/icon/icon";

ReactDOM.render(
  <DashboardMenu onSelectionChanged={console.log}>
    <DashboardMenuItem name="project">
      <Icon type="project-diagram" />
      Project
    </DashboardMenuItem>
    <DashboardMenuItem name="build">
      <Icon type="code" />
      Build
    </DashboardMenuItem>
    <DashboardMenuItem name="git">
      <Icon type="code-branch" />
      Git
    </DashboardMenuItem>
    <DashboardMenuItem name="git">
      <Icon type="list-ul" />
      My Todo List
    </DashboardMenuItem>
  </DashboardMenu>,
  document.getElementById("application")
);
