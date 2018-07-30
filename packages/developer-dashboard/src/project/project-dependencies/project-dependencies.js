import React from "react";
import { TableView } from "../../common/table-view/table-view";

export const ProjectDependencies = ({ dependencies = [] }) => {
  return (
    <TableView
      columns={["Name", "Specified version", "Actual version"]}
      items={dependencies}
      renderRow={({ TableCellView, item }) => (
        <React.Fragment>
          <TableCellView>
            <a
              href={`https://www.npmjs.com/package/${item.name}`}
              target="_blank"
            >
              {item.name}
            </a>
          </TableCellView>
          <TableCellView>{item.specifiedVersion}</TableCellView>
          <TableCellView>{item.actualVersion}</TableCellView>
        </React.Fragment>
      )}
    />
  );
};
