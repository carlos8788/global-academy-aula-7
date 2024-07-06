// local storage

const persona = {
    nombre: 'Luis',
    edad: 25
}

// localStorage.setItem("nombre", persona.nombre)
//guardar informacion
// localStorage.setItem("nombre", "sol")

//traer informacion
//let datos =localStorage.getItem("nombre")
//console.log(datos)

//borrar informacion
//localStorage.removeItem("edad")

//limpia toda la informacion del local storage
//localStorage.clear()

localStorage.setItem("persona", JSON.stringify(persona))

// const colores = ["rojo", "azul", "verde"]
// localStorage.setItem("colores", JSON.stringify(colores))

const personaObtenida = localStorage.getItem("persona")
console.log(personaObtenida)

let personaParse = JSON.parse(personaObtenida)
console.log(personaParse)
const nombre = personaParse.nombre
console.log(nombre)
const edad = personaParse.edad
console.log(edad)


