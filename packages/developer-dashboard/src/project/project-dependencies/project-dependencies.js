import React from "react";
import { TableView } from "../../common/table-view/table-view";

export const ProjectDependencies = ({ dependencies = [] }) => {
  return (
    <TableView
      columns={["Name", "Specified version", "Actual version"]}
      items={dependencies}
      renderRow={({ TableCellView, item }) => (
        <React.Fragment>
          <TableCellView>{item.name}</TableCellView>
          <TableCellView>{item.specifiedVersion}</TableCellView>
          <TableCellView>{item.actualVersion}</TableCellView>
        </React.Fragment>
      )} 
    />
  );
};
