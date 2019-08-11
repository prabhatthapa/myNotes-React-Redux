import React, { Component } from "react";
import { Link } from "react-router-dom";
import NoteList from "../noteList/noteList.container";
import NoteDetail from "../noteDetail/noteDetail.container";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="noteDashboard">
        <div>
          <h3>Notes</h3>
        </div>
        <div>
          <Link to="/create">Create Note</Link>
        </div>
        <div className="notes">
          <div className="noteList">
            <NoteList />
          </div>
          <div className="noteDetail">
            <NoteDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
