import React, { useState } from "react";

import ImageContainer from "./components/ImageContainer";
import AppCss from "./styles/app.module.css";

function App() {
  const [output, setOutput] = useState("");
  return (
    <div className={AppCss.root}>
      {output && <div className={AppCss.output}>{output}</div>}
      <ImageContainer setOutput={setOutput} />
    </div>
  );
}

export default App;
