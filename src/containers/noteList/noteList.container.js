import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote } from "../../actionCreators/note.action";

class NoteList extends Component {
  renderList() {
    return this.props.notes.map(note => {
      return (
        <li
          key={note.title}
          onClick={() => this.props.selectNote(note)}
          className="list-group-item"
        >
          {note.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <ul className="list-group col-sm-4">{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.allNotes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNote: selectNote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
