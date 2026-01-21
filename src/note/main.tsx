import { createRoot } from "react-dom/client";
import { NoteApp } from "./NoteApp";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>
);