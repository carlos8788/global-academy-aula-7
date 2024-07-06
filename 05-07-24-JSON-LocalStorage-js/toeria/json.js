
//objeto
const persona = {
    nombre: 'Juan',
    edad: 20
}

//enviamos -> datos tenemos que convertilos de objeto(codigo js) a json(texto)
console.log(persona)
console.log(typeof (persona))

const jsonPersona = JSON.stringify(persona)
console.log(jsonPersona)
console.log(typeof (jsonPersona))

//recibimos <- datos tenemos que convertilos de json(texto) a objeto(codigo js)
const persona2 = '{"nombre":"Luis","edad":25}'
console.log(persona2)
console.log(typeof (persona2))

const objetoPersona2 = JSON.parse(persona2)
console.log(objetoPersona2)
console.log(typeof (objetoPersona2))