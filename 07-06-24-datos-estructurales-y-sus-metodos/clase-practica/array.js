console.log("----------Arrays [ ] -----------")

console.log(" ----- homogeneos ---------------")

let frutas = ["manzana", "pera", "banana"]

//  indice       0         1        2

console.log("La longitud de frutas es: ", frutas.length)
console.log("El ultimo elemento es: ", frutas[2])


console.log("\n----- heterogeneos ---------------")

let multipleInfo = [ true, 20, "hola", [1,2,3], {a:1, b:5}]
//indice               0    1    2       3           4
console.log("La longitud de multipleInfo es: ", multipleInfo.length)
console.log("El valor del tercer elemento es: ", multipleInfo[3][1])//devulve el 2
console.log("El valor del tercer elemento es: ", multipleInfo[4].b)//devulve el 5

console.log("\n ------- Metoodos de los Arrays --------------")

let nombres = ["Pedro", "Juan", "Maria", "Jose"]
/*
nos permite visualizar el array, el cual muestra 
la lista de elementos, su longitud, y sus indices
*/
console.log(nombres)

console.log("\n ------- push() --------------")
//agrega un elemento al final del array
nombres.push("LEO")
console.log("El nombre agrgado es: ", nombres)//imprime el array con el nuevo elemento
console.log("La longitud de nombres es: ", nombres.length)//imprime la longitud

console.log("\n ------- pop() --------------")
//elimina el elemento al final del array
let deportes = ["futbol", "tenis", "natacion"]
let deporteEliminado = deportes.pop()
console.log("Se elimino el ultimo deporte:", deporteEliminado)//imprime el deporte eliminado
console.log(deportes)//imprime el array sin el deporte que fue eliminado

console.log("\n----- shift() ---------------")
//elimina el primer elemento
let colores = ["rojo", "verde", "azul"]
colores.shift()
//imprime el array sin el primer elemento
console.log("El primer elemnto eliminado es: ", colores)


console.log("\n ------ splice() -------------")
/*
Permite eliminar y reemplazar elementos en un array
Retorna un array que contiene los elementos eliminados
Su Sintaxis --> array.splice(start, deleteCount, item1, item2, ..., itemN)

    El parametro start:  El índice en el array desde donde comenzar a cambiar el array.
    El parametro deleteCount: El número de elementos a eliminar desde el índice start. Si es 0, no se eliminarán elementos.
    Los parametros item1, item2, ..., itemN: Los elementos a agregar al array desde el índice start. 
                                            Si no se especifica ningún elemento, splice solo eliminará elementos del array
*/
//caso 1 Eliminar elementos
console.log("\n ---- ELIMINAR ------")
let letras = ["a", "b", "c", "d", "e", "f", "g"]
//indice       0    1    2    3    4    5    6
// Eliminar 3 elementos a partir del índice 2 inclusive
let eliminados = letras.splice(2,3)//--> devuelve ["c", "d", "e"]
console.log("Los elementos eliminados son: ", eliminados)
console.log("Los elementos restantes son: ", letras)// --> ["a", "b", "f", "g"]


//caso 2 remplazar elementos
console.log("\n ---- MODIFICAR O REMPLAZAR ------")
let animales = ["perro", "gato", "pajaro", "pez", "conejo"]
// Reemplazar 2 elementos a partir del índice 1 incluido
// quita "gato" y "pajaro" y remplaza por true y "leon"
let remplazados = animales.splice(1,2, true, "leon")
console.log('Los elementos reemplazados son: ', remplazados)// --> ["gato", "pajaro"]
console.log("El array con elemento reemplazado: ", animales)// --> ["perro", true, "leon", "pez", "conejo"]


//caso 3 agregar elementos
 console.log("\n ---- AGREGAR  ------")
let vocales = ["a", "e", "i", "o", "u"]
// Agregar elementos en el índice 1 solo agregar false y 1, sin eliminar ningun elemento
let agregados = vocales.splice(1,0, false, 1)
//El segundo parametro al ser 0, es como decir que no se elimina nada y solo se agregan elementos
console.log("Los elementos agregados son: ", agregados)// --> ["a", false, 1, "e", "i", "o", "u"]
console.log("El nuevo array con los elementos agregados: ", vocales)// --> ["a", "false", 1, "e", "i", "o", "u"]


console.log("\n ------ join() -------------")
//Devuelve una cadena de caracteres
let flores = ["rosa", "lirio", "orquidea"]
// si no se especifica nada devuelve una cadena separada por comas, 
//si se especifica el separador " ", devuelve una cadena separada por espacios
let frase = letras.join(' ')
console.log("Devuelve una cadena", frase)

console.log("\n ------ slice() -------------")
//Devuelve un nuevo array, sin modificar el original
let verduras = ["lechuga", "papa", "tomate", "zanahoria"]
let result = verduras.slice(1,3)
console.log("El nuevo a array es: ", result)
console.log("El array original es: ", verduras)

console.log("\n ------ reverse() -------------")
//Invierte el array
verduras.reverse()
console.log("El array invertido es: ", verduras)


console.log("\n ------- concat() -------------")
//Unir dos arreglos
let comidas = ["arroz", "pollo", "pescado"]
let bebidas = ["agua", "cafe", "te"]
console.log("El array comidas es: ", comidas)
console.log("El array bebidas es: ", bebidas)
let unidos = comidas.concat(bebidas)
console.log("El array comidas y bebidas unidos es: ", unidos)

console.log("\n ------- sort() -------------")
//Ordena el array
let desordenados = [3, 2, 1, 5, 4]
desordenados.sort()
console.log("El array original desordenado es: ", desordenados)
console.log("Los elementos ordenados son: ", desordenados)
