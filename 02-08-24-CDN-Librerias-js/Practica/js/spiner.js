export function mensajeDeCarga(cargando){
    const spiner = document.querySelector(".container")
    spiner.innerHTML = cargando ? `<div class="loader">Cargando datos....</div>` : " "
}


/// es lo mismo que lo de arriba ? True : False

// if(cargando){
//     true
//     spiner.innerHTML = `<div class="loader">Cargando datos....</div>`

// }else{
//     false
//     spiner.innerHTML = " "
// }