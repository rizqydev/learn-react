import {  useImmerReducer } from "use-immer";
import { NoteForm } from "./NoteForm";
import { Note } from "../types/Note";
import { NoteContextDispatch, NotesContext } from "./NoteContext";
import NoteList from "./NoteList";
// import { useReducer } from "react";

let id: number = 0;
const initialNotes: Note[] = [
  { id: id++, text: "Learn React", done: false },
  { id: id++, text: "Learn Vue", done: false },
];

console.log("NoteApp rendered");

function noteReducer(draft: Note[], action: { type: "ADD_NOTE" | "CHANGE_NOTE" | "DELETE_NOTE", payload: Note }) {
  switch (action.type) {
    case "ADD_NOTE":
      draft.push({
        ...action.payload,
        id: id++
      })
      break
    case "CHANGE_NOTE": {
      const index = draft.findIndex((note) => action.payload.id === note.id)
      draft[index] = action.payload
      break
    }
    case "DELETE_NOTE": {
      const index = draft.findIndex((note) => action.payload.id === note.id)
      draft.splice(index, 1)
      break
    }
  }
}

export function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

  return (
    <>
    <NotesContext.Provider value={notes}>
      <NoteContextDispatch.Provider value={dispatch}>
        <NoteForm />
        <NoteList />
      </NoteContextDispatch.Provider>
      </NotesContext.Provider>
    </>
  )
}