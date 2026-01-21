import { useState } from "react";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileSection from "./ProfileSection";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("Rizqy")

  return (
    <ProfileContext.Provider value={name}>
      <h1>Profile App</h1>
      <ProfileForm name={name} setName={setName} />
      <ProfileSection />
      <ProfileAddress />
    </ProfileContext.Provider>
  )
}