

const FormNoControlado = () => {

    const manejarEnvio = (e) =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))

        console.log("Datos del formulario:", data)
    }

  return (
    <form action="" onSubmit={manejarEnvio}>
        <label htmlFor="">Nombre:</label>
        <input className="form-control" type="text" name="nombre" />

        <label htmlFor="">Email:</label>
        <input className="form-control" type="email" name="email" />

        <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
  )
}

export default FormNoControlado