
// Variables Booleanas y como se comportan segun el operador logico
let booleana = true;
console.log(booleana)//true

let numero1 = 10 > 20
console.log(numero1)//false

let numero2 = 10 < 20
console.log(numero2)//true

// Operador NOT !
let numero3 = 10 > 20
console.log(numero3)//false
//la negacion inviete la condicion de true a false y viceversa
console.log(!numero3)//true

/** PRIMER PUNTO A TENER EN CUENTA LAS CONDICIONES SE LEEN O EVALUAN DE IZQUIERDA A DERECHA */

/**
 * Operador && AND
 * Pueden multiples condiciones:
 *      condicion1 && condicion2 && condicion3 ........ 
 * 
 *      true && true && true ........
 * 
 * Todas las condiciones deben ser true para que se ejecute el resultado, 
 * una condicion que no sea true, corta el codigo lo cual no hace que no ejecute el resultado
 * 
 */  

// if else y operador logico AND &&

const usuario = 'admin'
const password = '1234'

const usuarioIngresado = prompt("Ingrese el usuario: ")
const passwordIngresada = prompt("Ingrese la contraseña: ")

//son todas las posibles condiciones, en cada una de ellas SI la primera condicion es false
// corta el ciclo y no ejecuta el resultado, continuando con el siguiente if hasta llegar al else.
// pero si ambas condiciones son true ejecuta el resultado y no sigue eveluando los siguientes if
if(usuarioIngresado === usuario && passwordIngresada === password){
    //ambas condiciones se cumplieron osea es true
    console.log("Login exitoso, !Bienvenido!")

}else if(usuarioIngresado !== usuario && passwordIngresada === password){
    //ambas deben ser true para que ejecute el resultado
    console.log(usuarioIngresado !== usuario )//true
    console.log(passwordIngresada === password)//true
    console.log("Usuario incorrecto")

}else if(usuarioIngresado === usuario && passwordIngresada !== password){
    //ambas deben ser true para que ejecute el resultado
    console.log("Contraseña incorrecta")

}else{
    //no hace falta definir la condicion, por defecto la condicion es true y ejecuta el resultado
    console.log(usuarioIngresado !== usuario )//true
    console.log(passwordIngresada !== password)//true
    console.log("Usuario y contraseña incorrectos")
}

//////////////////////////////////////

/*** Operador OR ||
 *  Tambien puede tener multiples condiciones:
 *      condicion1 || condicion2 || condicion3 ........
 * 
 *      true      || true o false || true o false  ........
 * 
 * Con que una condicion sea true, ya sea la primera o la segunda, etc, evalua cada condicion
 * hasta encontrar que una sea verdadera y ejecuta el resultado. De lo contrario 
 * 
 * Este ejemplo determinará si una persona puede obtener una licencia de conducir.
 *  Para calificar, la persona debe cumplir con las siguientes condiciones:

    1- Debe tener al menos 18 años. Debe ser true
    2- Debe haber pasado el examen teórico o el examen práctico. Una debe ser true almenos una condicion
    de lo contrario pasa por el else
 */

// Solicitar información al usuario
const edad = parseInt(prompt("Ingrese su edad:"));
const pasoExamenTeorico = prompt("¿Pasó el examen teórico? (sí/no)").toLowerCase();
const pasoExamenPractico = prompt("¿Pasó el examen práctico? (sí/no)").toLowerCase();

// Evaluar las condiciones usando &&, || y paréntesis
if (edad >= 18 && (pasoExamenTeorico === 'sí' || pasoExamenPractico === 'sí')) {
    console.log("Puede obtener la licencia de conducir.");
} else {
    console.log("No puede obtener la licencia de conducir.");
}

/** 
 * La condición if evalúa si la persona cumple con ambas condiciones 
 * necesarias para obtener la licencia de conducir:

    edad >= 18: La persona debe tener al menos 18 años.
    (pasoExamenTeorico === 'sí' || pasoExamenPractico === 'sí'): 
    La persona debe haber pasado al menos uno de los exámenes (teórico o práctico).

    Utilizamos paréntesis para agrupar las condiciones pasoExamenTeorico === 'sí' y 
    pasoExamenPractico === 'sí' para asegurarnos de que la persona cumpla con al menos una de 
    estas dos condiciones, además de tener al menos 18 años.
 */










