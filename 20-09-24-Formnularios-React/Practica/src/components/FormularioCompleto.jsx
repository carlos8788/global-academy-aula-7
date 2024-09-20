import { useState } from "react"


const FormularioCompleto = () => {

    const[form, setForm] = useState({
        nombre: " ",
        email: " ",
        password: " "
    })

    const [errores, setErrores] = useState({})

    const manejarCambios = (e) =>{
        const {value, name} = e.target 
        console.log(value, name)

        setForm({
            ...form,
            [name]: value
        })
    }

    const manejoEnvio = (e) =>{
        e.preventDefault()
        //console.log(form)

        const erroresValidacion = validar()
        setErrores(erroresValidacion)

        if(Object.keys(erroresValidacion).length === 0){
            console.log("enviado", form)
        }else{
            console.log("no enviado, hay un error")
        }
    }

    const validar = () =>{
        const errores = {}

        if(!form.nombre.trim()){
            errores.nombre = "El campo nombre es obligatorio"
        }
        // if(!form.email.trim()){
        //     errores.email = "El campo email es obligatorio"
        // }
        // if(!form.password.trim()){
        //     errores.email = "El campo password es obligatorio"
        // }

        return errores
    }


  return (

    <form action="" onSubmit={manejoEnvio}>
        <label htmlFor="">Nombre: </label>
        <br />
        <input type="text" placeholder="Escribe tu nombre" name="nombre"
         value={form.nombre}
         onChange={manejarCambios} />

         {errores.nombre && <p>{errores.nombre}</p>}
        <br />
        <label htmlFor="">Email: </label>
        <br />
        <input type="email" placeholder="Escribe tu email" name="email"
         value={form.email}
         onChange={manejarCambios}/>
        <br />
        <label htmlFor="">Contraseña</label>
        <br />
        <input type="password" placeholder="Escribe tu contraseña" name="password"
         value={form.password}
         onChange={manejarCambios} />
        <br />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioCompleto