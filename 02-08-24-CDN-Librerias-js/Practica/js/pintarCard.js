export function pintarCard(data){
    const container = document.querySelector(".container");
    //recorro la data
     let datos = ' '
     
    data.forEach(prod => {
       
        datos += `

            <div class="product-card">
                <h3>${prod.name}</h3>
                <p>${prod.precio}</p>
                <p>${prod.descripcion}</p>
                <img src="${prod.avatar}" alt="${prod.name}" width="50%">

            
                <button class="editar" data-id="${prod.id}">Editar</button>
                <button class="eliminar" data-id="${prod.id}">Eliminar</button>                  
            </div>
                
        `
    })
    container.innerHTML = datos
}