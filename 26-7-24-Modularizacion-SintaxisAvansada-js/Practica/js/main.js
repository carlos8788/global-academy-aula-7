import { actualizarData, crearData, eliminarData, getData, getDataById } from "./api.js";
import { pintarCard } from "./pintarCard.js";

const URL = "Url de su api";
//1)METODO GET
function cargaProductos(){

    
    getData(URL)
    .then(data => {
        
        pintarCard(data)
        
    })
    .then(()=>{
        const btnsEditar = document.querySelectorAll(".editar");
        const btnsEliminar = document.querySelectorAll(".eliminar");

        btnsEditar.forEach(btn => {
            btn.addEventListener("click", function(){
                const id = this.getAttribute("data-id")
                editarProducto(URL,id)
            })
        })

        btnsEliminar.forEach(btn => {
            btn.addEventListener("click", function(){
                const id = this.getAttribute("data-id")
                eliminarProducto(URL,id)
            })
        })
    })
    .catch(err => console.log(err))
}


//2)METODO POST
const form = document.querySelector("form");

function guardarProductos(){

    
    form.addEventListener("submit", function(event){
        event.preventDefault();
    
        //capturo los datos del formulario    
        const data = Object.fromEntries(new FormData(event.target))
        //console.log(data)  

        //caputuro el id del formulario, con value traigo el valor del input
        const idProducto = document.querySelector(".producto-id").value

        //si hay un id lo actualizo PUT, 
        //si no es que es un nuevo producto y lo crea POST
        if(idProducto){

            console.log("Si hay id actualizo, PUT")
            actualizarData(URL, idProducto, data)
            .then(() =>{
                //una vez actualizado volvemos a cargar los datos
                cargaProductos()
                //limpio el formulario
                form.reset()
            })
            .catch(err => console.log(err))


        }else{
            console.log("No hay id, creo uno nuevo, POST")

            crearData(data)
            .then(() =>{
                //una vez creado volvemos a cargar los datos
                cargaProductos()
                //limpio el formulario
                form.reset()
            })
            .catch(err => console.log(err))
        }

    })
}



//3)METODO PUT, esta funcion es llamada desde el onclick de editar
function editarProducto(URL, id){

    console.log("Editar", id)
    //traigo GET los datos de la api por el id
    getDataById(URL, id)
    //el id no lo actualizo pero lo necesito para el PUT
    .then(data => {
        document.querySelector(".inputNombre").value = data.name
        document.querySelector(".inputPecio").value = data.precio
        document.querySelector(".inputDescripcion").value = data.descripcion
        document.querySelector(".inputAvatar").value = data.avatar
        document.querySelector(".producto-id").value = data.id
    })
    .catch(err => console.log(err))

}


//4)METODO DELETE

function eliminarProducto(URL, id){

    eliminarData(URL, id)
    //una vez eliminado volvemos a cargar los datos
    .then(() => cargaProductos())
    .catch(err => console.log(err))
}

cargaProductos()
guardarProductos()

