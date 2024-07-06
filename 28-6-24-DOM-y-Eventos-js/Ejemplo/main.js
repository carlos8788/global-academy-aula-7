/**
 * textContent

   - Descripción: textContent devuelve todo el contenido de texto de un nodo y sus descendientes. 
     Si se usa para establecer el contenido de texto, reemplaza todo el contenido del nodo.
   - Características:
       1- No tiene en cuenta el estilo CSS que oculta el contenido (por ejemplo, display: none).
       2- Incluye todo el texto dentro del elemento, incluyendo texto oculto por CSS.
       3- Es más rápido en rendimiento comparado con innerText.
   - Uso típico: Se usa cuando necesitas obtener o establecer el contenido de texto de un nodo de manera 
   rápida y no te importa el estilo CSS o el formato visual.
 */

const ejemplo1 = document.querySelector('.ejemplo1')
console.log(ejemplo1.textContent)//Hola mundo
ejemplo1.textContent = 'Nuevo texto'

console.log(ejemplo1.innerText)//Nuevo texto

/////////////////////////////////////////////////////////////

/**
 * 
innerText

   - Descripción: innerText devuelve el contenido de texto "visible" de un nodo y sus descendientes. 
     Si se usa para establecer el contenido de texto, reemplaza todo el contenido del nodo.
   - Características:
        1- Tiene en cuenta el estilo CSS que oculta el contenido.
        2- No incluye el texto que está oculto por CSS (por ejemplo, display: none).
        3- Procesa el contenido de texto de una manera similar a como se renderiza visualmente en el navegador.
        4- Es más lento en rendimiento comparado con textContent.
    - Uso típico: Se usa cuando necesitas obtener o establecer el contenido de texto visible de un nodo y 
      te importa el estilo CSS o el formato visual.
 */

const ejemplo2 = document.querySelector('.ejemplo2')
console.log(ejemplo2.innerText)//Hola mundo

ejemplo2.innerText = 'Nuevo texto visible'
console.log(ejemplo2.innerText)//Nuevo 
