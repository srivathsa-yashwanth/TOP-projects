import React, { useState } from "react";

import styles from "../styles/welcomeScreen.module.css";
import { targets } from "./ImageContainer";

const WelcomeScreen = () => {
  const [welcome, setWelcome] = useState(true);

  const handleStart = (event) => {
    setWelcome(false);
  };

  return (
    <>
      {welcome ? (
        <div className={styles.welcomeScreen}>
          <div className={styles.welcomeTitle}>Where's Mort-do?</div>
          <div className={styles.infoContainer}>
            <p className={styles.welcomeText}>Find the following </p>
            <div className={styles.targetsContainer}>
              {targets.map((target) => (
                <div key={target} className={styles.targetTile}>
                  {target}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.startButton} onClick={handleStart}>
            Start!
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default WelcomeScreen;
