// Arrays [ ] objetos { }

// cadena de caracteres " " o ' ' distinto de array
// array  [ ]
// objeto { }

console.log("---------- Arrays [ ] de Objetos { } -----------")
let libros = [ 

    { titulo: "titulo 1", autor: "autor 1", paginas: 100 },//indice 0
    { titulo: "titulo 2", autor: "autor 2", paginas: 200 },// indice 1
    { titulo: "titulo 3", autor: "autor 3", paginas: 300 }//indice 2

]
//como extraemos los datos, por menos el indice y la notacion de puntos
console.log("El autor es: ", libros[1].autor)

console.log("\n -------- objetos { } arrays [ ] ---------")

let receta = {
    nombre: "Pastel de chocolate",

    ingredientes: [ "harina", "chocolate", "azucar", "huevos" ],
}

//extraemos los datos por la notacion de punto
console.log("el nombre de la receta es: ", receta.nombre)
console.log("los ingredientes son: ", receta.ingredientes)

console.log("\n ----------- Matrices ( array de array )-------------")
/*
Tenemos: filas y columans con indexacion base 0

Columnas con indice 0, 1, 2

Fila 1             [1, 2, 3]   
Fila 2             [4, 5, 6]   
Fila 3             [7, 8, 9]
*/

let matriz = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// como son arrays axedemos a su valor por el indice con la notacion de corchetes
// el primer corchete es para la fila y el segundo para la columna
console.log(matriz[0][1]) // esto da el valor 2







