console.log('------ Arrays [ ] y Objetos { } ------')

//array
let libros = [

    //objetos
    { titulo: "Titulo 1", autor: "Autor 1", anio: 1876 },//0
    { titulo: "Titulo 2", autor: "Autor 2", anio: 1876 },//1
    { titulo: "Titulo 3", autor: "Autor 3", anio: 1876 } //2

]

console.log("Accedemos al array por el indice: ", libros[0])
console.log("Accedemos al objeto por la clave: ", libros[0].autor)

console.log('\n ------ Objetos y Arrays con valores ------')

let receta = {
    nombre: "Pizza",
    ingredientes: ["Salsa de tomate", "Queso", "Jamón"],
}

console.log("Accedemos al objeto por la clave: ", receta.ingredientes[0])
console.log("Unimos los valores, como en los arrays: ", receta.ingredientes.join(", "))

console.log('\n----- Arrays de arrays ------')


//     columna   0  1  2
//
//     fil 0 -> [1, 2, 3],
//     fil 1 -> [4, 5, 6],
//     fil 2 -> [7, 8, 9]

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("Resultado de la matriz fila 1 columna 2: ", matriz[1][2])// 6
