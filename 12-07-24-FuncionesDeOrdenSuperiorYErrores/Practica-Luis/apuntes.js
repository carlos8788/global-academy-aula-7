// Ejemplo de callback

function mayus(palabra, funcionCallBack){
    let palabraRetornada = funcionCallBack(palabra)
    console.log(palabraRetornada)
}

function manipularPalabra(palabra){
    return palabra.toUpperCase()
}

// mayus('hola', manipularPalabra)


const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 25];
// console.log(numeros)

// forEach 
const sumarDos = num => num + 2

const arrayForEach = numeros.forEach(sumarDos)

const arrayMap = numeros.map(sumarDos)

// console.log(numeros)
// console.log(arrayForEach)
// console.log(arrayMap)
// console.log(numeros)

const pares = numeros.filter(num => num % 2 === 0)
// console.log(pares)

const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0) // 0, 5 | 5, 10 | 15, 20
// console.log(suma)

const numeritos = [1, 2, 3]

const sumando = (acumulador, valorActual) => acumulador + valorActual

const suma2 = numeritos.reduce(sumando, 1)
// console.log(suma2)

let acumuladora = 0
numeritos.forEach(num =>{
    acumuladora = num + acumuladora
})
// console.log(acumuladora)

const buscar = numeros.find(num => num === 25)
// console.log(buscar)

const arr = numeros.filter(num => num === 25).map(numero => numero * 10)
// console.log(arr)

const persona = {
    nombre: 'Luis',
    edad: 35,
    apellido: 'Pérez'
}

const clavesPersona = Object.keys(persona)
// console.log(clavesPersona)

const valuesPersona = Object.values(persona)
// console.log(valuesPersona)

const persona2 = {
    nombre: 'Carlos',
    nacionalidad: 'Argentina'
}

console.log(persona)
const newObj = Object.assign(persona, persona2)
console.log(persona)
console.log(persona2)
console.log(newObj)

Object.freeze(persona2)

persona2.nacionalidad = 'Peruana'
persona2.casado = true

console.log(persona2)