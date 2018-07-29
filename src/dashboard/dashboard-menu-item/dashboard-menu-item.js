import React from "react";
import { View } from "../../common/view/view";

import "./dashboard-menu-item.scss";

export const DashboardMenuItem = ({
  name,
  children,
  onSelection,
  isSelected
}) => {
  const dashboardMenuItemActiveClassName =
    isSelected && "dashboard-menu-item--active";

  return (
    <View
      className={`dashboard-menu-item ${dashboardMenuItemActiveClassName}`}
      onClick={onSelection}
    >
      {children}
    </View>
  );
};
