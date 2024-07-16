// const titulo = document.createElement("h1")
// const container = document.querySelector(".container")


// titulo.textContent = 'Async'
// document.body.before(titulo)





// let valor = 9


// try {
//     console.log(5/valo)
// } catch (error) {
//     console.error(error.message)
// }

// container.innerText = "Cargando..."
// setTimeout(()=> { 
     
//     container.innerHTML = "<h2>Contenido Cargado</h2>"

// }, 2000)


function operacionRandom(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const numeroRandom = Math.floor(Math.random() *10)

            if(numeroRandom < 5 ){
                resolve (`Exitos ${numeroRandom}`)
            }else{
                reject (new Error(`Error ${numeroRandom} no es menor a 5`))
            }
        }, 2000)
    })
}

async function ejecutarOperacion(){
    try {
        const message = await operacionRandom()
        console.log("Resultado: ", message)
    } catch (error) {
        console.error("Error captuado: ", error.message)
    }
}

ejecutarOperacion()















