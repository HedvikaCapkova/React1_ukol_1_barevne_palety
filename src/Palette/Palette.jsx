import React from "react";
import { palettes } from "../palettes.js";
import { SchemeColor } from "../SchemeColor/SchemeColor.jsx";
import "./Palette.css";

export const Palette = () => {
  return palettes.map(
    ({ name, image, attribution, colors, direction, description }) => {
      return (
        <div key={name} className="palette">
          <div className={`palette-scheme palette-scheme--${direction}`}>
            <img className="scheme-image" src={image} alt={name} />
            <SchemeColor colors={colors}/>
          </div>
          <div className="palette-info">
            <h2>{name}</h2>
            <p>{description}</p>

            <p>
              Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.
            </p>
          </div>
        </div>
      );
    }
  );
};
