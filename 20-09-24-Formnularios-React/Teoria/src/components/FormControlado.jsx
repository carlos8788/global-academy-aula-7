import { useState } from "react"


const FormControlado = () => {

    const [nombre , setNombre] = useState("")
    const [email , setEmail] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()

        console.log(`Nombre: ${nombre} y el email: ${email}`)
    }


  return (
    <form action="" onSubmit={manejarEnvio}>

        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label >Email:</label>
        <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)} />
    
        <button type="submit">Enviar</button>
    </form>
  )
}

export default FormControlado