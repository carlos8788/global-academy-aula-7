const titulo = document.querySelector('.titulo')
titulo.innerText = "DON y Eventos desde js"

// console.log(titulo.innerText)

// titulo.innerText = "Hola mundo"

//titulo.textContent = "Hola mundo"

let alumnos = [
    { nombre: "María", edad: 20, curso: "Matemáticas", promedio: 8.5 },
    { nombre: "Juan", edad: 22, curso: "Física", promedio: 7.9 },
    { nombre: "Lucía", edad: 21, curso: "Química", promedio: 9.0 },
    { nombre: "Carlos", edad: 23, curso: "Biología", promedio: 7.5 },
    { nombre: "Ana", edad: 20, curso: "Historia", promedio: 8.8 }
];

const tableBody = document.querySelector(".table-body")

const pintarTabla = (alumnos) => {
    let datos = ' '

    for(let i = 0; i < alumnos.length; i++){
        //console.log(alumnos[i])
        let alumno = alumnos[i]
        datos += `  <Tr>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.edad}</td>
                        <td>${alumno.curso}</td>
                        <td>${alumno.promedio}</td>
                    </Tr>`

    //console.log(datos)
    }
    tableBody.innerHTML = datos
}

const boton = document.querySelector(".boton")
boton.addEventListener('click', ()=>{
    pintarTabla(alumnos)
})
//////// Tarjeta de productos

const productos = [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Televisor 50 pulgadas", precio: 700},
    {nombre: "Tablet",precio: 300},
    {nombre: "Audifonos",precio: 200},
    {nombre: "Teclado",precio: 50},
    {nombre: "Celular",precio: 500},
]

const cards = document.querySelector(".container")//container

let producto = ""

for(let producto of productos){

    //console.log(producto)
     
    producto = `<div>
                        <h3>${producto.nombre}</h3>
                        <p>${producto.precio}</p>
                    </div>`

    cards.innerHTML += producto

}








   





