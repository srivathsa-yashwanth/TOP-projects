import React, { useState, useEffect } from "react";
import mainImage from "../assets/images/rickandmortywaldo.webp";

import AppCss from "../styles/app.module.css";
import locations from "../data/locations";
import styles from "../styles/imageContainer.module.css";

const ImageContainer = () => {
  const [boxPositions, setBoxPositions] = useState();
  const [output, setOutput] = useState("");
  const [character, setCharacter] = useState("");
  const [score, setScore] = useState(0);

  const targets = ["Beth", "Morty", "Summer"];

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
    if (selection === character) {
      setScore(score + 1);
    } else {
    }
  };

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

  useEffect(() => {
    setOutput(score)
  }, [score])

  return (
    <div className={styles.imageContainer}>
      <img src={mainImage} onClick={handleClick} alt="main waldo" />
      {getBoundingBox(boxPositions)}
      {output && <div className={styles.output}>{output}</div>}
    </div>
  );
};

export default ImageContainer;
