//1)Url del mock api que egeneramos en la clase teorica
const URL = "";

//1)METODO GET
function cargaProductos(){

    const container = document.querySelector(".container");
    fetch(URL)
    .then(res => res.json())
    //.then(data => console.log(data))
    //traigo la data para mostrar en el front
    .then(data => {
        let datos = ' '
        //recorro la data
        data.forEach(prod => {

            datos += `

                <div class="product-card">
                    <h3>${prod.name}</h3>
                    <p>${prod.precio}</p>
                    <p>${prod.descripcion}</p>
                    <img src="${prod.avatar}" alt="${prod.name}" width="50%">

                    <!--aqui llamo a las funciones por medio del evento onclick -->
                    <button onclick="editaProducto(${prod.id})">Editar</button>
                    <button onclick="eliminaProducto(${prod.id})">Eliminar</button>                  
                </div>
                    
            `
        })
        container.innerHTML = datos
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
            fetch(`${URL}/${idProducto}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(() =>{
                //una vez actualizado volvemos a cargar los datos
                cargaProductos()
                //limpio el formulario
                form.reset()
            })
            .catch(err => console.log(err))


        }else{
            console.log("No hay id, creo uno nuevo, POST")

            fetch(URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }   
            })
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
function editarProducto(id){

    console.log("Editar", id)
    //traigo GET los datos de la api por el id
    fetch(`${URL}/${id}`)
    .then(res => res.json())
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

function eliminaProducto(id){

    fetch(`${URL}/${id}`, {
        method: "DELETE"
    })
    //una vez eliminado volvemos a cargar los datos
    .then(() => cargaProductos())
    .catch(err => console.log(err))
}

cargaProductos()
guardarProductos()

