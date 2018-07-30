import React from "react";
import { View } from "../view/view";

import "./card-view.scss";

export const CardView = ({ label, children }) => {
  const isColumnView = React.Children.count(children) > 1;

  return (
    <View className={`card-view ${isColumnView && 'card-view--column-view'}`}>
      <View className="card-view__label">{label}</View>
      <View className="card-view__value">{children || 'N/A'}</View>
    </View>
  );
};
