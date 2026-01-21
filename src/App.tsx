// import './App.css'
import { useRef } from 'react'
import { Counter } from './components/Counter'
import { Layout } from './components/Layout'
import LearnUseCallback from './components/LearnUseCallback'
import LearnReactFormExample from './components/LearnReactFormExample'
import DecimalInput from './components/DecimalInput'

function App() {
  const counter = useRef<number>(0)
  function handleAlert() {
    alert(counter.current++)
  }

  return (
    <>
      <div>
        <Layout>
          {/* <h1>Counter App</h1>
          <Counter />
          <Counter />
          <p>{counter.current}</p>
          <button onClick={handleAlert}>Alert</button> */}
          {/* <LearnUseCallback /> */}
          {/* <LearnReactFormExample /> */}
          <DecimalInput />
        </Layout>
      </div>
    </>
  )
}

export default App
