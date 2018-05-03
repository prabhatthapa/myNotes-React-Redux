import React, { Component } from "react";
import { connect } from "react-redux";

class NoteDetail extends Component {
  render() {
    if (!this.props.note) {
      return <div>Click one of the title to see note.</div>;
    }
    return (
      <div>
        <h4>Title - {this.props.note.title}</h4>
        <p>{this.props.note.detail}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    note: state.notes.activeNote
  };
}

export default connect(mapStateToProps)(NoteDetail);
