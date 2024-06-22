
///////////// FUNCIONES DECLARATIVAS ///////////////
function saludar(){
    console.log("Hola soledad")
}

saludar()



//////// EXPRESIONES DE FUNCIONES /////////


//function sumar(a, b){ }
const sumar = function(a, b){
    return a + b
}
console.log(sumar(2, 3))


////////////////// PARAMETROS Y ARGUMENTOS ///////////////////////// 

// parametro es lo que recibe la funcion por ejemplo a y b, variables
// function sumar(a,b)

// argumento: valores reales que le pasamos a la funcion ejemplo 2 y 3
//sumar(2, 3)

///// ALCANCE DE LAS VARIABLES ////////////////////

const variableGlobal = 'Soy una variable global'

//console.log('Estoy fuera de la funcion, ', variableLocal)

function mostrarVariables(){

    const variableLocal = 'Soy una variable local'
    console.log("Estoy dentro de la funcion, ", variableLocal)

    //console.log("Soy la variable global que esta dentro de la funcion, ", variableGlobal)
}



mostrarVariables()
//console.log("Estoy fuera de la funcion, ", variableGlobal)


////////// FUNCION FLECHA /////////////////////

//modo 1: sin parentesis es aplicable a cuando usamos un solo parametro

const multiplicar = a => a * a

console.log(multiplicar(2))

//modo 2: con parentesis es aplicable a cuando usamos mas de un parametro

const multiplicar2 = (a, b) => a * b

console.log(multiplicar2(2, 3))

//modo 3: para devolver un valor 

const saludar2 = nombre => console.log("hola", nombre)// `Hola ${nombre}`
saludar2("Luis")


/////// CALLBACK ////////////////////////////

//definimos nuestra funcion callback
function mostrarResultado(resultado){
    console.log("Resultado: ", resultado)
    
}

//definimos nuestra funcion
function procesarDatos(datos, callback){
    //procesamos los datos
    const resultado = datos.map(dato => dato *2)
    //llamamos nuestra funcion callback
    callback(resultado)
}

//array de datos
const datos = [1, 2, 3, 4, 5]
//invocamos nuestra funcion
procesarDatos(datos, mostrarResultado)


// setTimeout

//definimos nuestra funcion cal
function saludar3(){
    console.log("Hola, despues de 2 segundos")
}

//usar setTimeOut como callback
setTimeout(saludar3, 2000)






















