const container = document.querySelector('.container')
const titulo = document.createElement('h1')

titulo.textContent = 'Async'
titulo.style.textAlign = 'center'
document.body.before(titulo)

container.innerText = 'Cargando...'

//async
setTimeout(() => {
    container.innerHTML = '<h2>Contenido cargado</h2>'
}, 2000)


function randomOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numRandom = Math.floor(Math.random() * 10)
            console.log(numRandom)

            if (numRandom > 5) {
                reject(new Error(`El número ${numRandom} es mayor a 5`))
            }else{
                resolve(`El número es: ${numRandom}`)
            }
        }, 2000)
    })
}

// then catch

randomOperation()
    .then(result => console.log(result))
    .catch(error => console.error(error.message))

// async / await

async function ejecutarFnRandom(){
    try {
        console.log('async await')
        const result = await randomOperation()
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}
ejecutarFnRandom()
