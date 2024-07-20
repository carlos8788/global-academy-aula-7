const container = document.querySelector(".container");

const URL = "";

fetch(URL)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => {
        let datos = ' '
        data.forEach(producto => {
            //console.log(producto)
            datos += `
            
                <h3>${producto.name}</h3>
                <p>${producto.price}</p>
                <img src="${producto.image}">
            `
        })
        container.innerHTML = datos
    })
    .catch(err => console.log(err))