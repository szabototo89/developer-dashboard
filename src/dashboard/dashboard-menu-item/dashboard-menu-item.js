import React from "react";
import { View } from "../../common/view/view";

import './dashboard-menu-item.scss';

export const DashboardMenuItem = ({ name, children, onSelection }) => {
  return <View className="dashboard-menu-item" onClick={onSelection}>
    {children}
  </View>;
};
