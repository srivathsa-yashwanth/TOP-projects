import React, { useState } from "react";

import {ImageContainer} from "./components/ImageContainer";
import WelcomeScreen from "./components/welcomeScreen";
import AppCss from "./styles/app.module.css";

function App() {
  return (
    <div className={AppCss.rootContainer}>
      <ImageContainer />
      <WelcomeScreen/>
    </div>
  );
}

export default App;
