// ---- objetos  { clave: valor }----

//  claves --> son las propiedades del objeto
//  valores --> son los valores de las propiedades


// hay dos tipos de Notacion:

// ---- Notacion de Puntos: objeto.propiedad

let auto = {

    marca: "Toyota",
    modelo: "Corolla",
    color: "negro",
}


console.log("El modelo del auto es: ", auto.modelo)
console.log("El color del auto es: ", auto.color )

//------ Notacion de corchetes:

let persona2 = {
     "nombre": "juan",
     "Fecha de nacimiento": "23/01/2001",
     1: 'su id'
    }

console.log("El nombre de la persona2 es: ", persona2["nombre"])
console.log("la fecha es: ", persona2["Fecha de nacimiento"])

for(let key in persona2){
    console.log('Los datos de persona2 son: ', persona2[key])
}

//---------- Metodos de los objetos
//---> keys()
console.log("propiedades de persona: ", Object.keys(auto))

//---> values()
console.log("valores de las propiedades de persona: ", Object.values(auto))

//---> entries()
console.log("Array de claves-valor: ", Object.entries(auto))

let objetoDestino = {color: "rojo", tamanio: "grande"}
let objetoFuente = { color: "verde", forma: "circular"}
Object.assign(objetoDestino, objetoFuente)
console.log(objetoDestino)

//---> freeze()
console.log(Object.freeze(auto))
//intento modificar una propiedad
auto.color = "azul"
console.log("Auto freeze, intente cambiar el color x azul", auto)

// empleamos otro objeto para el ejemplo porque freeze no permite modificaciones
let libro = {
    titulo: "Ejemplo 1",
    anio: 1605,
    editorial: "Santillana",
}

//-----> seal()
//accedo al objeto y le agrego una propiedad (clave - valor)
libro.color = "rojo"
console.log("Propiedad agregada", libro)

//sello el objeto para que no se pueda modificar o agregar una propiedad
console.log("Objeto sellado",Object.seal(libro))

//intentando agregar una propiedad (clave - valor)
libro.estado = "nuevo"
console.log("Intento agregar una propiedad, estado y no lo permite", libro)

//intento eliminar una propiedad
delete libro.autor
console.log("Intentando eliminar la propiedad color y no lo permite", libro)

//SI! puedo modificar el valor de una propiedad existente
libro.titulo = "Ejemplo 2"
console.log("Modifico el valor, Si lo permite", libro)



