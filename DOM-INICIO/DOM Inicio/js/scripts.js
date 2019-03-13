
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    //const logo = document.getElementById("logo");
    //console.log(logo);
    //const navegacion = document.getElementById("navegacion");
    /*Modificar atributos*/
    /*Ocultamos el menu de navegacion*/
    //navegacion.style.display = "none";
    //console.log(navegacion);
    //Aqui se hace ocn clase, y agrega un arreglo de las class que tienen ese nombre
    //const navegacion = document.getElementsByClassName("navegacion");
    //navegacion[0].style.display = "none";
    //console.log(navegacion[0]);

    //Para tomar elementos tambien puede ser con las etiquetas
   /* const links = document.getElementsByTagName("a");
    console.log(links);

    for(let i of links){
      i.setAttribute("target", "_blank");
    }
    let enlacesSidebar = document.getElementById("sidebar").getElementsByTagName("a");
    console.log(enlacesSidebar);

    for (let enlacesSBa of enlacesSidebar){
      enlacesSBa.setAttribute("href", "http://www.google.com.mx")
    }*/

   //QuerySelector
   /*const encabezado = document.querySelector("h2");
    console.log(encabezado);
    const encabezadosAll = document.querySelectorAll("h2");
    console.log(encabezadosAll);
    console.log(encabezadosAll[0].innerText);

    const diversos = document.querySelectorAll("h2, footer p");
    console.log(diversos);*/

   //Trabajando con Nodos
   //  const enlaces = document.querySelectorAll("#menu ul li a")[0];
   //  console.log(enlaces.nodeType);
   //  console.log(enlaces.nodeName);
   //  console.log(enlaces.attributes);
   //  console.log(enlaces.attributes[0]);
   //  console.log(enlaces.firstChild);
   //  console.log(enlaces.firstChild.nodeValue);
   //  enlaces.firstChild.nodeValue= "home";
   //  enlaces.id = "lnkHome"

      //crear contenido
      // const sidebar = document.querySelector("#sidebar");
      // const nuevoElemento = document.createElement("h1");
      // const nuevotexto = document.createTextNode("Clase de Toño");
      // nuevoElemento.appendChild(nuevotexto);
      // sidebar.appendChild(nuevoElemento);

      //Agregar una entrada 6
     //  const enlacesSidebar = document.querySelectorAll("#sidebar ul");
     //  const nuevoEnlace = document.createElement("a");
     //  nuevoEnlace.setAttribute("href", "#");
     //  const textoEnlace = document.createTextNode("Entrada 6");
     //  nuevoEnlace.appendChild(textoEnlace);
     //  const nuevaLista = document.createElement("li");
     // nuevaLista.appendChild(nuevoEnlace);
     // //Agregarlo en el menú.
     // enlacesSidebar[0].appendChild(nuevaLista);
     // nuevaLista.style.backgroundColor= "red";
     // nuevaLista.style.fontFamily= "Helvetica";

     /*Clonar un nodo*/
     // const contenido = document.querySelectorAll("main");
     // const nuevoContenido = contenido[0]. cloneNode(true);
     // const sidebar = document.querySelector("#sidebar");
     // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[6]);

     // const sidebar = document.querySelector("aside");
     // console.log(sidebar);
     // const masVisitados = document.createElement("h2");
     // const textVisitados = document.createTextNode("Post mas visitados");
     // masVisitados.appendChild(textVisitados);
     // sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

      // const sidebar = document.querySelector("aside");
      // const contenido = document.querySelectorAll("main h2");
      //
      // for(let i=0;i<contenido.length;i++){
      //     let nuevoElemento = document.createElement("li");
      //     let nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
      //     nuevoElemento.appendChild(nuevoTexto);
      //     sidebar.insertBefore(nuevoElemento, sidebar.childNodes[0]);
      //}

    // const primerPost = document.querySelector("main article");
    // primerPost.parentNode.removeChild(primerPost);
    //
    // const enlace = document.querySelector("#navegacion nav ul li a");
    // console.log(enlace);
    // enlace.parentNode.removeChild(enlace);
    //
    // /*Eliminar un nodo especifico*/
    // const enlaces = document.querySelectorAll("#navegacion nav ul li a")[9];
    // console.log(enlaces);
    // enlaces.parentNode.removeChild(enlaces);

    let viejoNodo = document.querySelector("main h2");
    let nuevoNodo = document.querySelector("footer h2");
    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    let nuevoTitulo = document.createElement("h2");
    let nuevoTexto = document.createTextNode("Hola mundo");
    nuevoTitulo.appendChild(nuevoTexto);

    viejoNodo = document.querySelector("main h2");
    viejoNodo.parentNode.replaceChild(nuevoTitulo);

  });
  
})();
