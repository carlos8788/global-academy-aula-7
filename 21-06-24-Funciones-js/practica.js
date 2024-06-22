const sumar = function(a , b) {
    return a + b
}


// const resultado1 = sumar(1, 5)
// console.log("El resultado de la suma es:", resultado1)

// const resultado2 = sumar(2, 10)
// console.log("El resultado de la suma es:", resultado2)


function cacularYMostrar(a, b){
    const resultado = sumar(a, b)
    console.log("El resultado de la suma es:", resultado)
}

cacularYMostrar(1,5)
cacularYMostrar(2, 10)
cacularYMostrar(9, 8)

//Ejercicio Calcular Promedio de la diapo
let numeros = [1, 2, 3, 4, 5]

// const calcularPromedio = (numeros) => {
//     //1 - 2 - 3 - 4 - 5
//     let suma = 0

//     for(let i = 0; i < numeros.length; i++){

//         suma += numeros[i]
//     }
//     // suma = 15 / 5
//     return suma / numeros.length //3

// }

const calcularPromedio = (numeros) =>{
    
    let suma = numeros.reduce( (acumulador , valorActual ) => acumulador + valorActual, 0)
    return suma / numeros.length
}

let promedio = calcularPromedio(numeros)
console.log("El promedio es:", promedio)


