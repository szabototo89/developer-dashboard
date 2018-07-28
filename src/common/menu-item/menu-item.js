import React from "react";
import { View } from "../view/view";

import './menu-item.scss';

export const MenuItem = ({ name, children, onSelection }) => {
  return <View className="menu-item" onClick={onSelection}>
    {children}
  </View>;
};
