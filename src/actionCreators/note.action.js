export function selectNote(note) {
  return {
    type: "NOTE_SELECTED",
    payload: note
  };
}

export function addNote(note) {
  return {
    type: "ADD_NOTE",
    payload: note
  };
}
