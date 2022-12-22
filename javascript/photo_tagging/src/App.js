import React, { useState } from "react";

import ImageContainer from "./components/ImageContainer";
import AppCss from "./styles/app.module.css";

function App() {
  return (
    <div className={AppCss.rootContainer}>
      <ImageContainer />
    </div>
  );
}

export default App;
