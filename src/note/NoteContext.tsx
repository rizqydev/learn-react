import { createContext, Dispatch } from "react";
import { Note } from "../types/Note";

export const NotesContext = createContext<Note[] | null>(null)

export const NoteContextDispatch = createContext<Dispatch<{ 
  type: "ADD_NOTE" | "CHANGE_NOTE" | "DELETE_NOTE", 
  payload: Note
}>>(() => {})
