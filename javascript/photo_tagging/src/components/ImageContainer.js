import React, { useState, useEffect } from "react";
import mainImage from "../assets/images/rickandmortywaldo.webp";

import AppCss from "../styles/app.module.css";
import locations from "../data/locations";
import styles from "../styles/imageContainer.module.css";

const targets = ["Beth", "Morty", "Summer"];

const ImageContainer = () => {
  const [boxPositions, setBoxPositions] = useState();
  const [character, setCharacter] = useState("");
  const [corrects, setCorrects] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;  
    const y = e.clientY;
    setCharacter('')
    setBoxPositions({ x, y });
    const [X, Y] = [e.pageX, e.pageY];
    console.log("page", X, Y);
    locations.forEach((location) => {
      const [name, coords] = location;
      if (coords.x1 < X && X < coords.x2 && coords.y1 < Y && Y < coords.y2) {
        setCharacter(name);
      }
    });
  };

  const handleOptionClick = (event) => {
    const selection = event.target.textContent;
    if (selection === character && !corrects.includes(selection)) {
      setCorrects([...corrects, selection])
    } else {
    }
  };

  const getStatusStyle = (target) => {
    if (corrects.includes(target)) return styles.statusItemResolved
    else return styles.statusItem
  }

  const getBoundingBox = (position) => {
    if (!position) return;
    return (
      <div>
        <div
          style={{
            left: `${position.x - 35}px`,
            top: `${position.y - 35}px`,
          }}
          className={styles.boundingBox}
        />
        <div
          style={{
            position: "absolute",
            left: `${position.x + 45}px`,
            top: `${position.y - 35}px`,
          }}
          className={styles.optionsContainer}
        >
          {targets.map((target) => (
            <div
              key={target}
              className={styles.optionText}
              onClick={handleOptionClick}
            >
              {target}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.imageContainer}>
      <img src={mainImage} onClick={handleClick} alt="main waldo" />
      {getBoundingBox(boxPositions)}
      <div className={styles.statusContainer}>
        {targets.map((target) => (
          <div key={target} className={getStatusStyle(target)}>
            {target}
          </div>
        ))}
      </div>
    </div>
  );
};

export {ImageContainer, targets};
