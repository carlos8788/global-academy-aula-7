//1)Url del mock api que egeneramos en la clase teorica
const URL = "https://66631a8c62966e20ef0b668a.mockapi.io/Productos";

export async function getData(URL){

    const respuesta = await fetch(URL);
    const data = await respuesta.json()
    return data
    
}

export async function crearData(data){

    const respuesta = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }   
    })

    const resultadoData = await respuesta.json()
    return resultadoData
}

export async function getDataById(URL, id){
    console.log("api")
    const respuesta = await fetch(`${URL}/${id}`)
    const data = await respuesta.json()
    return data
}

export async function actualizarData(URL, id, data){
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const resultadoData = await respuesta.json()
    return resultadoData
}

export async function eliminarData(URL, id){
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    })

    const resultadoData = await respuesta.json()
    return resultadoData
}

