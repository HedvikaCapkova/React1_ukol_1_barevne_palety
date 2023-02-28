import React from 'react';
import { palettes } from './palettes.js';

export const Palette = () => {
    return palettes.map(({ name, image, attribution, colors, direction, description }) => {
    return (
      <div key={name} className="palette">
        <div className={`palette-scheme palette-scheme--${direction}`}>
          <img className="scheme-image" src={image} alt={name} />
          <div className="scheme-colors">
            {colors.map((color)=> {
              return (
                <div key={color} className="scheme-color" style={{ backgroundColor: `${color}` }}>{color}</div>
              )
            })}
          </div>
        </div>
        <div className="palette-info">
          <h2>{name}</h2>
          <p>{description}</p>

          <p>Photo by <a href={attribution.url} target="_blank">{attribution.name}</a>.</p>
        </div>
      </div>
    );
  })
};

  

  