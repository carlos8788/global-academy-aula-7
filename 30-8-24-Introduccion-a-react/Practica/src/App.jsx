
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
