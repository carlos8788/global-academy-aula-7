 console.log("------ Objetos { clave - valor } -----------")


// segun el tipo de objeto es el tipo de notacion
console.log("\n ---- Notacion de puntos -----")
let persona = {

    nombre: "Pedro",
    apellido: "Perez",
    edad: 20

}
//para acceder a las propiedades de este objeto se usa la notacion de puntos
console.log("El nombres de persona es: ", persona.apellido)


console.log("\n ------ Notacion de corchetes -----")

let receta = {

    1: "123",
    "nombre": "Pastel de chocolate",
    "Tiempo de coccion": 45

}
//para acceder a las propiedades de este objeto se usa la notacion de corchetes
console.log("El tiempo de coccion es: ", receta["Tiempo de coccion"])

//-------------------------------------------------------------------------------------///

console.log('\n----- Metodos de un objeto -----')

console.log('\n----- metodo keys -----')
//metodo keys -> devuelve un array con todas las propiedades de un objeto
let  auto = {
    marca: 'ford',
    patente: 'abc123',
    color: 'rojo'
}

console.log('Propiedades (claves) de auto', Object.keys(auto))// ['marca', 'patente', 'color']


console.log('\n----- metodo values -----')
//metodo values -> devuelve un array con todos los valores de las propiedades de un objeto
console.log('Valores de auto', Object.values(auto))// ['ford', 'abc123', 'rojo']


console.log('\n----- metodo entries -----')
//metodo entries -> devuelve un array con pares clave-valor
console.log('Entradas de auto', Object.entries(auto))  
// [ [ 'marca', 'ford' ], [ 'patente', 'abc123' ], [ 'color', 'rojo' ] ]         


console.log('\n----- metodo assign -----')
/*

Devuelve un nuevo objeto, con las copias de las propiedades de los objetos de origen.
    *Si las propiedades existen en el objeto de destino, las sobrescribe.
    *Si las propiedades no existen en el objeto de destino, las agrega.
*/

// Definimos tres objetos
const destino = { a: 1, b: 2 };
const origen1 = { b: 3, c: 4 };
const origen2 = { c: 5, d: 6 };
console.log("Destino inicia:", destino);   // { a: 1, b: 2 }
// Usamos Object.assign para copiar las propiedades de origen1 y origen2 a destino
const resultado = Object.assign(destino, origen1, origen2);

console.log(resultado); // { a: 1, b: 3, c: 5, d: 6 }
console.log("Destino termina:", destino);   // { a: 1, b: 3, c: 5, d: 6 }

console.log('\n----- metodo freeze -----')
//metodo freeze -> congela un objeto
// Definimos un objeto
const ejemploObjeto = {
    nombre: "Ejemplo",
    edad: 25,
    ciudad: "Ciudad Ejemplo"
  };
  


