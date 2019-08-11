import React from "react";

const activeNote = props => {
  const { activeNote } = props;

  if (!activeNote) {
    return <div>Click one of the title to see note.</div>;
  }

  return (
    <div>
      <h4>Title - {activeNote.title}</h4>
      <p>{activeNote.detail}</p>
    </div>
  );
};

export default activeNote;
