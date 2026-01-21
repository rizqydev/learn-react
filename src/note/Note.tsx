import { useContext, useState } from "react";
import { Note } from "../types/Note";
import { NoteContextDispatch } from "./NoteContext";

export default function NoteComp({ note } : { note: Note }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useContext(NoteContextDispatch)

  let component
if (isEditing) {
    component =  (
      <>
      <input type="text" value={note.text} onChange={(event) => handleChange(event)} />
      <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    component = (
      <>
      <p>{note.text}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => handleDelete(note)}>Delete</button>
      </>
    )
  }

  function handleCheckedDone(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "CHANGE_NOTE",
      payload: {
        ...note,
        done: e.target.checked,
      }
    })
  }
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      {
        type: "CHANGE_NOTE",
        payload: {
          ...note,
          text: event.target.value
        }
      }
    )
  }

  function handleDelete(note: Note) {
    dispatch({
      type: "DELETE_NOTE",
      payload: note
    })
  }
  
  return (
    <>
    <label>
      <input type="checkbox" checked={note.done} onChange={handleCheckedDone} />
      {component} ({ note.done ? "Done" : "Not Done" })
    </label>
    <br />
    </>
  );
}