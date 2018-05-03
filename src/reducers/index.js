import { combineReducers } from "redux";
import NotesReducer from "./notes.reducer";

const rootReducer = combineReducers({
  notes: NotesReducer
});

export default rootReducer;
