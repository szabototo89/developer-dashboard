import React from "react";
import { View } from "../../common/view/view";

import "./dashboard-user.scss";

export const DashboardUser = ({ fullName }) => {
  return <View className="dashboard-user">{fullName}</View>;
};
