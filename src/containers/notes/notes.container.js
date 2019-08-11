import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NoteList from "../noteList/noteList.container";
import NoteDetail from "../noteDetail/noteDetail.container";

import "./notes.css";

class Notes extends Component {
  render() {
    const { activeNote } = this.props.notes;
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
            <NoteDetail activeNote={activeNote} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(Notes);
