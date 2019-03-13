function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&result=${cantidad}`;
    //Peticion Fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        console.log(usuario);
        const li = document.createElement("li");
        const {name: {first}, name: {last}, picture: {medium}, nat} = usuario;
        li.innerHTML = `Nombre:${first} ${last}
                        Pais: ${nat}
                        Image: <img src="${medium}" alt=""> `;

        document.querySelector("#app").appendChild(li);
    });
}

descargarUsuarios(3);