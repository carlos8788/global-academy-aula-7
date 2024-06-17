

let persona = {

    nombre: "Pedro",
    apellido: "Perez",
    edad: 20
}

let nombreElemento = document.getElementById("nombre")
let apellidoElemento = document.getElementById("apellido")
let edadElemento = document.getElementById("edad")

nombreElemento.textContent = 'Nombre: ' + persona.nombre
apellidoElemento.textContent = 'Apellido: ' + persona.apellido
edadElemento.textContent =  'Edad: ' + persona.edad