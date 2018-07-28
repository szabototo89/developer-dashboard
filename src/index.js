import * as React from "react";
import * as ReactDOM from "react-dom";
import { DashboardMenu } from "./dashboard/dashboard-menu/dashboard-menu";
import { DashboardMenuItem } from "./dashboard/dashboard-menu-item/dashboard-menu-item";
import { Icon } from "./common/icon/icon";
import { DashboardUser } from "./dashboard/dashboard-user/dashboard-user";

ReactDOM.render(
  <React.Fragment>
    <DashboardUser fullName="John Doe" />

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
      <DashboardMenuItem name="my-todo-list">
        <Icon type="list-ul" />
        My Todo List
      </DashboardMenuItem>
    </DashboardMenu>
  </React.Fragment>,
  document.getElementById("application")
);
