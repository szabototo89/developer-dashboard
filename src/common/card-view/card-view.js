import React from "react";
import { View } from "../view/view";

import "./card-view.scss";

export const CardView = ({ label, children }) => {
  return (
    <View className="card-view">
      <View className="card-view__label">{label}</View>
      <View className="card-view__value">{children || 'N/A'}</View>
    </View>
  );
};
