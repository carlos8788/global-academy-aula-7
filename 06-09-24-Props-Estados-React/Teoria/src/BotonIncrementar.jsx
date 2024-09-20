import { useState } from "react"


const BotonIncrementar = () => {

    const [ contador, setContador ] = useState(0)

    const incrementar = () => {
      setContador(contador + 1)
    }
   
  return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default BotonIncrementar