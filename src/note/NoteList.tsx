import { useContext, useMemo, useRef, useState } from "react"
import NoteComp from "./Note"
import {NotesContext } from "./NoteContext"

export default function NoteList() {
  const notes = useContext(NotesContext)
  const [search, setSearch] = useState<string>("")
  const searchInput = useRef(null)

  const filteredNotes = useMemo(() => {
    return notes?.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))
  }, [notes, search])

  function handleSearch() {
    console.info("search")

    // @ts-ignore
    setSearch(searchInput.current.value)
  }

  return (
    <>
      <br />
      <input ref={searchInput} placeholder="Search"  />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes && filteredNotes.map((note, index) => (
          <NoteComp key={index} note={note} />
        ))}
      </ul>
    </>
  )
}