const container = document.querySelector(".container");

container.innerHTML = `Hola mundo`

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

fetch(URL)
    .then(res => response.json())
    .then(data => {
        let datos = ' '
        data.results.forEach(pokemon => {
            //console.log(pokemon.name)
            datos += `<li>${pokemon.name}</li>`
        })
        container.innerHTML = datos
    })
    .catch(err => console.log(err))
      