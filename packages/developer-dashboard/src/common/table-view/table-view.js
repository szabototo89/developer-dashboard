import { View } from "../view/view";
import React from "react";

import "./table-view.scss";

const TableCellView = ({ children }) => {
  return <View className="table-cell-view">{children}</View>;
};

export const TableView = ({ columns = [], items = [], renderRow }) => {
  return (
    <View className="table-view">
      <View className="table-view__header">
        {columns.map((columnName, index) => (
          <View key={index} className="table-view__column">
            {columnName}
          </View>
        ))}
      </View>
      <View className="table-view__body">
        {items.map((item, index) => (
          <View key={index} className="table-view__row">
            {renderRow && renderRow({ TableCellView, item })}
          </View>
        ))}
      </View>
    </View>
  );
};
