import paises from "./api.js";

console.log(paises)
const cardPaises = document.querySelector(".container");

paises.map(pais => {
    cardPaises.innerHTML += `
        <div class="card">
            <h3>${pais.nombre}</h3>
            <p>${pais.capital}</p>
            <p>${pais.continente}</p>
        </div>
    `
})
