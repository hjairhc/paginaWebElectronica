"use strict";

/*Declaración de objetos.*/

const persona = {
    nombre: 'Jair',
    apPaterno: 'Hernandez',
    edad: 23,
    trabaja: true,
    libros:["batallas en el desierto", "Azteca"],
    domicilio: {
        calle: "Calle",
        numeroExterior: 50,
        numeroInterior: '205 B',
        municipio: 'municipio'
    }
};
console.log(persona);
console.log(persona.domicilio.calle);
console.log(persona.libros[1]);

/*Template Strings*/
const nombre = 'Jair', trabajo = 'Movistar';
console.log("Nombre: "+nombre+". Trabajo: "+trabajo);
console.log(`Nombre: ${nombre}. Trabajo ${trabajo}`);

//Selecciona el contenedor
const contenedortexto = document.querySelector("#mensaje");
/* FORMA ANTIGUA]*/
let lista = '<ul>' + '<li>Nombre: ' +nombre+ '</li>'+'<li>Trabajo: ' +trabajo +'</li>'+'</ul>';

contenedortexto.innerHTML = lista;
let lista2 =
    `<ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>
    </ul>`;

contenedortexto.innerHTML = lista2;