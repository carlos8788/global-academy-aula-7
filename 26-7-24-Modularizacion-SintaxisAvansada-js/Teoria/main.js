// //Operador Ternario 

// let edad = 18;

// // if(edad >= 18){
// //     console.log("si")
// // }else{
// //     console.log("no")
// // }

// let esAdulto = (edad >= 18) ? "si" : "no";
// console.log(esAdulto)

// //typeof

// console.log(typeof edad)
// let nombre = "pedro";
// console.log(typeof (nombre))

// let verdadero = true;
// console.log(typeof verdadero)

// //Spead Operator
// //funciones
// function sumar(a, b, c) {
//     return a + b + c
// }

// const numeros = [1, 2, 3];
// console.log(sumar(...numeros))

// // array
const numerosPares = [2, 4, 6, 8, 10];
const numerosImapres = [1, 3, 5, 7, 9]; 

// // console.log([numerosPares, numerosImapres]);

// // console.log(numerosPares.concat(numerosImapres))

// console.log([...numerosPares, ...numerosImapres])

// console.log([...numerosPares, true])

// //console.log(numerosPares[0], numerosImapres[1] )

// //objetos

// const objeto1 = { a: 1, b: 2 };
// const objeto2 = { c: 3, d: 4 };
// //si la variable existe la sobre escribe
// console.log({...objeto1, ...objeto2})

// // truty - falsy

// const variableBooleana = -80;
// console.log(Boolean(variableBooleana))


// Operadore por defecto

// OR ||

let input// solo esta declarada-  false
console.log(input)// undefined - false

input = "hola"//true
input = null//false

let dato = input || "valor no definido"
console.log(dato)

// AND && fusion de nulos ??

input = 0
let datos2 = input ?? "Vemos que devuelve"
console.log(datos2)

// encadenamiento opcional ?.

const persona = { 
    nombre: "Juan",
    edad: 20
}

const apellido = persona.apellido?.principal
console.log(apellido)

//Desestructuracion
//objetos
let auto = { marca: "audi", modelo: "a4" }
console.log(auto.marca, auto.modelo)
const { marca, modelo } = auto
console.log(marca, modelo)

//arrays

const colores = ["rojo", "azul", "verde"]

const [ rojo, segunda , tercera ] = colores
console.log(rojo)


// Resto de elementos

const arrayNuevo = [...numerosPares, ...numerosImapres  ]
console.log(arrayNuevo)
const [uno, ...resto] = arrayNuevo

console.log(uno)
console.log(resto)


// intercabio de variables sin variables temporales

let a = 1;
let b = 2;

[a, b ] = [b, a]

console.log(a, b)