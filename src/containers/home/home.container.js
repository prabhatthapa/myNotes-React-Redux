import React, { Component } from "react";
import NoteList from "../noteList/noteList.container";
import NoteDetail from "../noteDetail/noteDetail.container";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="noteDashboard">
        <div>
          <h3>Note List</h3>
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
