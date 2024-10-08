
import { actualizarData, crearData, eliminarData, getData, getDataById } from "./api.js";
import { pintarCard } from "./pintarCard.js";

const URL = "https://66631a8c62966e20ef0b668a.mockapi.io/Productos";

//1)METODO GET
function cargaProductos(){
//////////////////////////////////////////////////////////

    //agrego un delay para ver el spiner
    setTimeout(() => {

        getData(URL)
        .then(data => {
            
            pintarCard(data)
            
        })

        //////////////////////////////////////////////////////
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
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Producto eliminado con exito",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        })
    })
    .catch(err => {
        console.log(err)
    })

    }, 1000)


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
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Producto actualizado con exito",
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()

            })
            .catch(err => {
                console.log(err)
            })


        }else{
            console.log("No hay id, creo uno nuevo, POST")

            crearData(data, URL)
            .then(() =>{
                //una vez creado volvemos a cargar los datos
                cargaProductos()
                //limpio el formulario

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Producto creado con exito",
                    showConfirmButton: false,
                    timer: 1500
                  });
                form.reset()
            })
            .catch(err => {
                console.log(err)
            })
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
        //////////////////////////////////////////////////

        document.querySelector(".inputNombre").value = data.name
        document.querySelector(".inputPecio").value = data.precio
        document.querySelector(".inputDescripcion").value = data.descripcion
        document.querySelector(".inputAvatar").value = data.avatar
        document.querySelector(".producto-id").value = data.id
        ///////////////////////////////////////////////////
    })
    .catch(err =>{
        console.log(err)
    })

}


//4)METODO DELETE

function eliminarProducto(URL, id){

    eliminarData(URL, id)
    //una vez eliminado volvemos a cargar los datos
    .then(() => cargaProductos())
    .catch(err =>{
        console.log(err)
    })
}

cargaProductos()
guardarProductos()


