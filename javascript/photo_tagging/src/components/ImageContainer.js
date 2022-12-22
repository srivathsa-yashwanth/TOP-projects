import React, { useState } from "react";
import mainImage from "../assets/images/rickandmortywaldo.webp";

import AppCss from "../styles/app.module.css";
import locations from "../data/locations";

const ImageContainer = ({ setOutput }) => {
  const [boxPositions, setBoxPositions] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setBoxPositions([...boxPositions, { x, y }]);

    const [X, Y] = [e.pageX, e.pageY];
    console.log("page", X, Y);
    setOutput("Nothing yet");
    locations.forEach((location) => {
      const [character, coords] = location;
      if (coords.x1 < X && X < coords.x2 && coords.y1 < Y && Y < coords.y2) {
        setOutput(character);
      }
    });
  };

  return (
    <div className={AppCss.ImageContainer}>
      <img src={mainImage} onClick={handleClick} alt="main waldo" />
      {boxPositions.map((position, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${position.x-35}px`,
            top: `${position.y-35}px`,
            width: "70px",
            height: "70px",
            border: "5px solid red",
          }}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
