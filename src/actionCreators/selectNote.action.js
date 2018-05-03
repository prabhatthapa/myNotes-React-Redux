function selectNote(note) {
  return {
    type: "NOTE_SELECTED",
    payload: note
  };
}
export default selectNote;
