
import '../components/pais.css'
const Pais = ({pais}) => {
  return (
    <div className="card"> 
        <p>{pais.nombre}</p>
        <p>{pais.capital}</p>
        <p>{pais.continente}</p>
        <p>{pais.poblacion}</p>
    </div>
  )
}

export default Pais