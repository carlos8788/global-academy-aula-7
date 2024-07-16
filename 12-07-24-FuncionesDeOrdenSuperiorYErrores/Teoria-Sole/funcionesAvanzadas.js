//callback es una funcion que se pasa como argumento a otra funcion


// function mayusculas(palabra, callback) {

//     let palabraRetonada = callback(palabra)
//     console.log(palabraRetonada)

// }

// function manipalarPalabra(palabra){

//     return palabra.toUpperCase()
// }


// mayusculas("hola", manipalarPalabra)

let numeros = [1, 2, 3, 4]
//       i     0   1   2   3   4   5   6   7   8   9

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }



// let sumar = numeros.forEach(numero => numero + 1 ) 
// console.log(sumar)


//map
const cuadrados = numeros.map( num => num * num)
console.log(cuadrados)


//filter
const pares = numeros.filter(num => num % 2 === 0)
console.log(pares)

//reduce
//acumulador = 0 + valorActual = 1 
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
console.log(suma)


/////////// Objetos 

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20
}



console.log(Object.keys(persona))

console.log(Object.values(persona))

console.log(Object.entries(persona))

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

console.log(Object.assign(obj1, obj2))

console.log(persona)
persona.nacionalidad ="Mexicana"
console.log(persona)

Object.freeze(persona)
persona.casado = true
console.log(persona)

persona.edad = 30
console.log(persona)
