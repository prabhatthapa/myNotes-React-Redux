import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Notes from "../notes/notes.container";
import AddNote from "../addNote/addNote.container";
import About from "../../components/documentations/about.component";
import contact from "../../components/documentations/contact.component";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Notes} />
      <Route exact path="/documentations" component={About} />
      <Route
        exact
        path="/documentations/render"
        render={() => <About message="Hello world" />}
      />
      <Route exact path="/documentations/contact" component={contact} />
      <Route path="/create" component={AddNote} history />
    </div>
  </Router>
);

export default App;
