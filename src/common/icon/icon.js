import React from "react";

import './icon.scss';

export const Icon = ({ type }) => {
  return <i className={`icon fas fa-${type}`} />;
};
