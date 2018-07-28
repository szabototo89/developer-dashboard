import React from "react";

export const View = ({ className, children, onClick }) => {
  return <div onClick={onClick} className={className}>{children}</div>;
};
