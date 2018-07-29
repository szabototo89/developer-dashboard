import React from "react";
import { View } from "../../common/view/view";

import "./dashboard.scss";

export const Dashboard = ({ renderMenu, children, onSelectionChanged }) => {
  const dashBoardMenu = React.cloneElement(renderMenu && renderMenu(), {
    onSelectionChanged
  });

  return (
    <View className="dashboard">
      <View className="dashboard__menu">{dashBoardMenu}</View>

      <View className="dashboard__content">{children}</View>
    </View>
  );
};
