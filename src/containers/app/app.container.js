import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/home.container";
import AddNote from "../addNote/addNote.container";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={AddNote} history />
    </div>
  </Router>
);

export default App;
