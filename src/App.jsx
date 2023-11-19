import { useState } from 'react'
import QRCode from "react-qr-code";

export default function App() {
  const [mass, setMass] = useState('')
  return (
    <div className="flex justify-center items-center p-6 h-full w-full">
        <div className="bg-blue-200 w-full h-96 text-center p-4">
            <input type="text" name="" id="" value={mass} onChange={e => setMass(e.target.value)} className="border-2 p-2 bg-blend-lighten"/>
            <p className="overflow-auto">URL : {mass}</p>
            <div className="w-full flex justify-center">
              <QRCode value={mass} viewBox={`0 255 255 255`} bgColor="#e04e29"/>
            </div>
        </div>
        
    </div>
  )
}
