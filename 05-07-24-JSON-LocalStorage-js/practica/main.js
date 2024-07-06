const form = document.querySelector('form')
const nombreInput = document.querySelector('.nombre')
const emailInput = document.querySelector('.email')

const btn = document.querySelector('.boton')

const tabla = document.querySelector('.tabla-usuarios')


//let arrayUsuarios = []

//cargar y mostar los usuarios siempre al principio
cargarYMostarUsuarios()

//El formulario es el que escucha el evento submit y envia los datos
form.addEventListener('submit', function(event) {

    //prevenir el envio del formulario por defecto
    event.preventDefault()

    //creo un objeto que captura los datos
    const usuariosObjeto = {
        nombre: nombreInput.value,
        email: emailInput.value
    }
    //console.log(usuariosObjeto)

    // arrayUsuarios.push(usuariosObjeto)
    // console.log(arrayUsuarios)

    mostrarUsuarios(usuariosObjeto)
    guardarUsusarios(usuariosObjeto)

    //limpiar el formulario luego de enviar los datos
    form.reset()

})

function mostrarUsuarios(usuariosObjeto){
    //imprimer los datos en la tabla del dom
    tabla.innerHTML += `<tr>
                            <td>${usuariosObjeto.nombre}</td>
                            <td>${usuariosObjeto.email}</td>
                        </tr>`
}

function guardarUsusarios(usuariosObjeto){

    // getItem obtengo los usuarios guardados que vienen del local storage
    // como string(texto) lo paso a objeto(codigo js) y los guardo en una variable
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))

    //los agrego al array de usuarios que vienen del local storage
    usuarios.push(usuariosObjeto)

    //con setItem envio los datos al local storage convirtiendo el objeto(codigo js) a string(texto)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

}

function cargarYMostarUsuarios(){

    // si hago esto de entrada localStorage.setItem('usuarios', JSON.stringify([])
    //cada vez que cargue la pagina me va a mostrar un array vacio
    //por eso esta condicion sirve para que no me de error si el local storage esta vacio

    if(localStorage.getItem("usuarios") === null){

        //si se cumple la condicion, guardo en el local storage un array vacio
        localStorage.setItem('usuarios', JSON.stringify([]))
    }

    //obtengo los usuarios del local storage convertidos de string(texto) a objeto(codigo js)
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usuarios)
    //recorro el array y muestro los usuarios
    for(let usuario of usuarios){
        mostrarUsuarios(usuario)
    }

}


