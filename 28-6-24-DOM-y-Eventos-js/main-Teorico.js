const titulo = document.querySelector('.titulo');

// console.log(titulo)

const parrafo = document.querySelector('#parrafo');
// console.log(parrafo)


const container = document.querySelector('.container');
console.log(container)

container.innerText = 'Hola mundo'
console.log(container.innerText)

container.innerHTML = "<h1>Hola mundo</h1>"
console.log(container.innerHTML)

parrafo.innerHTML = "<h1>Hola mundo</h1>"

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

container.innerHTML = `<div>
                        <h1>${persona.nombre}</h1>
                        <P> ${persona.apellido}</P>
                        <p> ${persona.edad}</p>
                    </div>`

const boton = document.querySelector('.boton');
boton.style.backgroundColor = 'blue'
boton.style.color = 'white'
boton.style.borderRadius = '10px'
boton.style.padding = '10px 20px'

const newDiv = document.createElement('section');
newDiv.innerText = 'Soy un section desde js'
document.body.appendChild(newDiv)


parrafo.classList.add('new-class')

parrafo.classList.remove('new-class')




//////////////// Eventos

boton.addEventListener('click', () => {
    console.log('Soy un Click')
    container.innerHTML = 'Soy un Click desde JS'
})