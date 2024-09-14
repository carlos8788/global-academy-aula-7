import { useEffect, useState } from "react"

const useFetchpaises = () =>{
    const [paises, setPaises] = useState([])
    const [cargando, setCargando] = useState(true)
    const [ error, setError] = useState(null)

    useEffect( ()=>{
        

        const cargarData = async () => {
            setCargando(true)
            setError(null)
            try {
                const respuesta = await fetch('https://restcountries.com/v3.1/all')
                if(!respuesta.ok){
                    throw new Error("Error al cargar los datos")
                }

                const data = await respuesta.json()
                setPaises(data)
               
            } catch (error) {
                setError(error.message)
            } finally{
                setTimeout(() =>{
                    setCargando(false)
                }, 2000)
            }
        }
        cargarData()
    }, [])

    return {paises, cargando, error}
}

export default useFetchpaises