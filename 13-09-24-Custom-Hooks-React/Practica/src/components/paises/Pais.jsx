

const Pais = ({pais}) => {
  return (
    <ul>
        {pais.map(pais => {
            <li key={pais}>{pais}</li>
        })}
    </ul>
  )
}

export default Pais