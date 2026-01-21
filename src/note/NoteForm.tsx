import { useContext, useState } from "react";
import { NoteContextDispatch } from "./NoteContext";

export function NoteForm() {
  const [text, setText] = useState<string>("");
  const dispatch = useContext(NoteContextDispatch);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleClick() {
    setText("");
    dispatch({ type: "ADD_NOTE", payload: { id: 999, text, done: false } });
  }


  return (
    <>
  <div>Note Form</div>
  <input type="text" value={text} onChange={handleChange} />

  <button onClick={handleClick}>Save</button>
    </>
  )
  ;
}