import React from "react";
import "./SchemeColor.css";

export const SchemeColor = ({colors}) => {
  return (
    <div className="scheme-colors">
      {colors.map((color) => {
        return (
          <div
            key={color}
            className="scheme-color"
            style={{ backgroundColor:`${color}`}}>
            {color}
          </div>
        );
      })}
    </div>
  );
};
