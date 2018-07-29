import React from "react";
import { View } from "../../common/view/view";

import "./dashboard-page.scss";

export const DashboardPage = ({ title, children }) => {
  return (
    <View className="dashboard-page">
      <View className="dashboard-page__header">{title}</View>

      <View className="dashboard-page__body">
        {children}
      </View>
    </View>
  );
};
