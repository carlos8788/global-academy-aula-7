
const getHours = () => {
    const horaActual = new Date().getHours()

    let saludo = ' '
  
    if(horaActual < 12){
      saludo = 'Buenos Dias';
    }else if(horaActual > 12 && horaActual < 20){
      saludo = 'Buenas Tardes';
    }else {
      saludo = 'Buenas Noches';
    }

    return saludo
}

export default getHours