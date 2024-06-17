//-------> homogeneos

let frutas = [ "manzanas", "peras", "mandarinas", "naranjas" ]
//    indice ->   0           1         2             3

let numeros = [ 1, 2, 3, 4 ]

//-------> heterogeneos

let multiplesDatos = [ true, 20, "Hola mundo", ["rojo", "verde"], {nombre: "juan", edad: 20}]
//                  0    1      2                3                  4

console.log("El elemento en el indice 2 es: ",frutas[2])
console.log("El elemento en el indice 3 es: ",multiples[3])

console.log("La longitud del array frutas es: ",frutas.length)
console.log( "La longitud del array multiples es: ",multiplesDatos.length)

//------------ Metodos ---------------

let nombres = [ "pedro", "maria", "juan", "leo"]
console.log("array original", nombres)
console.log("longitud inicial",nombres.length)

//---> push()
nombres.push("LEO")
let nuevoArray = nombres
console.log("Metodo push", nuevoArray)
console.log("nueva longitud",nombres.length)

//---> pop()
let nombreEliminado = nombres.pop()
console.log("Ultimo elemento del array eliminado",nombreEliminado)
console.log("Metodo pop",nombres)

//---> shift()
let primerEliminado = nombres.shift()
console.log("primer elemento del array eliminado",primerEliminado)
console.log("Metodo shift",nombres)

//---> splice()

//eliminando elementos
nombres.splice(2,2)
console.log("Metodo splice, eliminando",nombres)

//agregar elementos
nombres.splice(2,0,"x","y")
console.log("Metodo splice, agregando",nombres)

//remplazar
nombres.splice(2,2,"p", "z")
console.log("Metodo splice, remplazando",nombres)


//--- join()
let nombresUnidos = nombres.join(' - ')
console.log( "Metodo join", nombresUnidos)


//----> slice()
let copia = nombres.slice(1,3)
console.log( "Metodo slice",copia)


//---> reverse()
let invertidos = nombres.reverse()
console.log( "Metodo reverse",invertidos)

// ---> concat()

let auto = ["ford", "R12"]
let colores = ["rojo", "verde"]

let autoColores = auto.concat(colores)
console.log("Metodo concat",autoColores)

//---> sort()

let desordenados = [ "a", "j", "h", "z", "e"]
let ordenados = desordenados.sort()
console.log("Metodo sort",ordenados)





















