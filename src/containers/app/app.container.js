import React from "react";
import { Route } from "react-router-dom";
import Home from "../home/home.container";
import AddNote from "../addNote/addNote.container";

const App = () => (
  <div>
    <AddNote />
    <Home />
  </div>
);

export default App;
