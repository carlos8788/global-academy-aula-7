
import BotonIncrementar from "./BotonIncrementar"
import CompnentePadre from "./CompnentePadre"

import ContainerCards from "./ContainerCards"
import CustomButton from "./CustomButton"
import Titulo from "./Titulo"


function App() {


  return (

    <>
      
      
      <Titulo />
      <CustomButton nombre="Presionar"/>
      <CustomButton nombre="Comprar"/>

      <BotonIncrementar/>

      <ContainerCards/>

      
    </>

  )
}

export default App
