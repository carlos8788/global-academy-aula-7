import useFetchpaises from "../../hooks/useFetchPaises"
import Error from "../Error"
import Loading from "../Loading"

const ListaPaises = () => {

    const {paises, cargando, error} = useFetchpaises()

    if(cargando){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }


  return (
    <div>
        <h1>Lista Paises</h1>
        <ul>
            {paises.map(pais => <li key={pais.cca3}>{pais.name.common}</li>)}
        </ul>
    </div>
  )
}

export default ListaPaises