import { useEffect, useState } from 'react'
import listaPaises from './js/api'
import Pais from './Pais'
import '../components/listaPaises.css'

const ListaPaises = () => {

    const [ paises, setPaises ] = useState([])

    useEffect( () => {
        setPaises(listaPaises)
    } , [] )

  return (
    <div className='container'>
        { paises.map(pais => <Pais key={pais.id} pais={pais}/> )}
    </div>
  )
}

export default ListaPaises