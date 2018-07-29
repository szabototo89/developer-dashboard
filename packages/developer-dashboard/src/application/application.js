import * as React from "react";

import { DashboardMenu } from "../dashboard/dashboard-menu/dashboard-menu";
import { DashboardUser } from "../dashboard/dashboard-user/dashboard-user";
import { DashboardMenuItem } from "../dashboard/dashboard-menu-item/dashboard-menu-item";
import { Icon } from "../common/icon/icon";
import { Dashboard } from "../dashboard/dashboard/dashboard";
import { Component } from "react";
import { ProjectPage } from "../project/project-page/project-page";

const fetchAsJson = async (url) => (await fetch(url)).json();

export class Application extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      selectedPage: "project"
    };

    this.handleSelectionChanged = ({ name }) => {
      this.setState(() => {
        return {
          selectedPage: name
        };
      });
    };
  }

  async componentDidMount() {
    const project = await fetchAsJson("http://localhost:80/project");

    const projectDescriptor = Object.assign({}, project, {
      scripts: await fetchAsJson('http://localhost:80/project/script')
    });
    this.setState(() => ({
      projectDescriptor
    }));
  }

  render() {
    const { selectedPage, projectDescriptor } = this.state;
    const isProjectPageSelected =
      selectedPage === "project" && projectDescriptor;

    return (
      <Dashboard
        onSelectionChanged={this.handleSelectionChanged}
        renderMenu={() => (
          <DashboardMenu selected={selectedPage}>
            <DashboardUser fullName="John Doe" />
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
        )}
      >
        {isProjectPageSelected && (
          <ProjectPage projectDescriptor={projectDescriptor} />
        )}
      </Dashboard>
    );
  }
}
