import { useState } from 'react'
import logo from './logo.svg'
import {scaleLinear, scaleBand, extent, line} from "d3"

function App() {
  const [count, setCount] = useState(1200)
  const user = { name: "collin", city: "Seattle"}
  const circleScale = scaleLinear().domain([0,50]).range([200,300])
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Hello {user.name}, I see you are from {user.city}</p>
      <p>{true ? "foo" : "bar"}</p>
      <svg width="500" height="500" style={{border:"1px solid pink"}}>
      <line x1={50} y1={50} x2={200} y2={200} stroke = "black" strokeWidth={2} />
      {["10","100","250","350"].map((d) => {
        return <circle cx = {d} cy = {d} r = "5" fill="red" />;
      })}
        {/* <circle cx="50" 
          cy ="50"
        r="5"
        fill="black"
        stroke='red'
        strokeWidth="10"
        /> */}
      {/* <circle cx="200" 
      cy ="200"
      r="5"
      fill="black"
      stroke='red'
      strokeWidth="10"/>  */}
      <text x="120" y="100" style={{ fontSize: 10, font:"italic" }}>It is a line! :)</text>
      </svg>
    </div>
  )
}

export default App

/*
.json: javascript object notation
.jsx react based format for defining components, a function that returns markup

these will only appear if you've run the react-ts
.ts "normal" javascript file, except typescript
.tsx is a .jsx file, but in typescript

in svg, the order is really important to display what it shows
*/