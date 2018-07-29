import React from "react";
import { DashboardPage } from "../../dashboard/dashboard-page/dashboard-page";
import { CardView } from "../../common/card-view/card-view";

export const ProjectPage = ({ projectDescriptor = {} }) => {
  return (
    <DashboardPage title={`Project (${projectDescriptor.name})`}>
      <CardView label="Name">{projectDescriptor.name}</CardView>
      <CardView label="Description">{projectDescriptor.description}</CardView>
      <CardView label="Version">{projectDescriptor.version}</CardView>
      <CardView label="Project type">{projectDescriptor.type}</CardView>
      <CardView label="License">{projectDescriptor.license}</CardView>
      <CardView label="Author">{projectDescriptor.author}</CardView>
      <CardView label="Repository">{projectDescriptor.repositoryUrl}</CardView>
      <CardView label="Scripts">
        {projectDescriptor.scripts.map(({ name, command }) => (
          <CardView label={name}>{command}</CardView>
        ))}
      </CardView>
    </DashboardPage>
  );
};
