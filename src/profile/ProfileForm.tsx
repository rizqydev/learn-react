export default function ProfileForm({ name, setName }: { name: string, setName: (name: string) => void }) {
  return (
    <>
    <h1>Form Profile Address</h1>
    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )

}