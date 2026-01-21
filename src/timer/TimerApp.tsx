import { useRef, useState } from "react"

export default function TimerApp() {
  const [start, setStart] = useState<number>(0)
  const [ now, setNow] = useState<number>(0)
  const timer = useRef<number>(0)

  function handleStart() {
    setStart(Date.now())
    setNow(Date.now())

    timer.current = setInterval(() => {
      setNow(new Date().getTime())
    }, 10)
  }

  function handleStop() {
    clearInterval(timer.current)
  }
  
  return (
    <div>
      <h1>Time: { now - start} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}