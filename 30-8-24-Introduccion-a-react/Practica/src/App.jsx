import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getHours from './getHour'

function App() {

  const saludo = getHours()

  return (
    <div>
      <h1>{saludo}</h1>  
    </div>
  )

}

export default App
