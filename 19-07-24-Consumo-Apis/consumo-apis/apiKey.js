import { key } from "./key.js";
const formulario = document.querySelector("form");
const container = document.querySelector(".container");

const URL = "https://www.omdbapi.com/?apikey=${key}&type=movie&s=${data.buscar}";

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target))

    //console.log("Data", data)

    //container.innerHTML = data.buscar

    fetch(URL + `${data.buscar}`)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => {
        let datos = ' '
        data.Search.forEach(movie => {
            datos += `
            
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <img src="${movie.Poster}">
            `
        })
        container.innerHTML = datos
    })
    .catch(err => console.log(err))
})