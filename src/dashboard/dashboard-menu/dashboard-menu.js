import React from "react";
import { View } from "../../common/view/view";

import './dashboard-menu.scss';

export const DashboardMenu = ({ children, onSelectionChanged }) => {
  return <View className="dashboard-menu">
    {React.Children.map(children, (child) => {
      const { props: { name } } = child;

      const handleSelectionChanged = () => onSelectionChanged && onSelectionChanged({ name });

      return React.cloneElement(child, {
        onSelection: handleSelectionChanged
      })
    })}
  </View>;
};
