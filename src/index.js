import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const app = (
  <React.StrictMode>
   
      <App />
 
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
