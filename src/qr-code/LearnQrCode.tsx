import QRCode from "react-qr-code"

export const LearnQrCode = () => {
  return (
    <div>
      <h1>Qr Code Example</h1>
      <QRCode value="https://www.google.com" /> 
    </div>
  )
}