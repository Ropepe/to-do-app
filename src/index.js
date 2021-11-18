import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoContainer from "./Components/TodoContainter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer className="desnaStrana" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
