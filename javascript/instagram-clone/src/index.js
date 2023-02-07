import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import firebaseContext from "./context/firebase";
import { firebase, FieldValue } from './lib/firebase'
import './styles/app.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <firebaseContext.Provider value={{firebase, FieldValue}} >
      <App />
    </firebaseContext.Provider>
  </React.StrictMode>
);
