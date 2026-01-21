import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileSection() {
  const profile = useContext(ProfileContext)

  return (
    <>
    <h1>Profile</h1>
    <p>Hello {profile}</p>
    </>
  )

}