import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { addNote } from "../../actionCreators/note.action";

class AddNote extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { title, detail } = e.target;
    const newNote = { title: title.value, detail: detail.value };
    this.props.addNote(newNote);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="addNote">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h4>Title</h4>
            <p>
              <input name="title" />
            </p>
            <h4>Detail</h4>
            <p>
              <textarea name="detail" />
            </p>
          </div>
          <div>
            <button>Add New</button>
          </div>
        </form>
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
  return bindActionCreators({ addNote: addNote }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNote)
);
