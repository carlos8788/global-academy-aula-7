let llueve = false

if(llueve){

    console.log("Uso un paraguas para salir")

}

//else

let edad = 10

if(edad >= 18){
    console.log(true)
    console.log("La persona es mayor de edad")
}else{
    console.log(false)
    console.log("La persona es menor de edad")
}

// eslse if
let semaforo = "rojo"
if(semaforo === "verde"){
    console.log("Uds no puede cruzar")
}else if(semaforo === "amarillo"){
    console.log("Cuidado el semaforo se pondra en rojo")
}else{
    console.log("El semaforo esta en rojo adelante puede cruzar")
}



//switch

// let dia = prompt("Ingrese un numero: \n 1. Lunes \n 2. Martes \n 3. Miercoles ")

// switch(dia){

//     case "1":
//         console.log("Lunes")
//         break;

//     case "2":
//         console.log("Martes")
//         break;

//     case "3":
//         console.log("Miercoles")
//         break;
    
//     default:
//         console.log("Valor invalido")
//         break;
// }


/// bucles: For, for in , for of, while, do while


////// for

for(let inicial = 0; inicial < 5; inicial++){

    console.log("El valor de inicial es:", inicial)

}

/**
 *  inicial = 0
 *  si 0 < 5 -> true
 *  inicial se incremente en 1 
 * imprime el 0
 * 
 * ahora inicial = 1 
 * si 1 < 5 -> true
 * inicial se incremente en 1, p0asa a valer 2
 * 
 */


/// for of

const numeros = [1,2,3]

for(let numero of numeros){
    console.log("El valor de numero es:", numero)
}

const string = "hola"

for(let letra of string){
    console.log("El valor de letra es:", letra)
}

// for in 
// const persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 20
// }


// for (let propiedad in persona){
//     console.log(`EL valor de las porpiedades - > ${propiedad}: ${persona[propiedad]}`)
// }


//while

let contador = 0

while(contador < 5){

    console.log("elvalor de contador es: ", contador)

    contador++
}



//do while

let entrada

do{
    entrada = prompt("Ingrese una palabra o salir para finilizar")
    console.log("la palabra ingresada es:", entrada)

}while(entrada !== "salir")



























