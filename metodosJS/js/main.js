"use strict";

saludar('Jair' );
saludar('Jorge', 'De becario');
saludar('Mosh', 'CERN');
/*declarab¿ndo funciones*/
function saludar(nombre= 'Desconocido', trabajo = 'no sabemos'){
    console.log(`Hola: ${nombre}, tu trabajo es: ${trabajo}`);
}

//Function expression
const hola = function(){
    alert ("Hola WEY");
};
hola();
/*
const suma = function(a= 0, b= 0 ){
    return a+b;
};
suma(20,10);
suma(100,10);
console.log(suma(20,40));
let resultado = suma(20, 433)
console.log(resultado);*/

//IIFE funciones que se invocan automaticamente
(function(){
    alert("Me invoco automaticamente");
})();

(function(lenguaje){
    alert("Estoy trabajando con "+lenguaje);
})('JavaScript');

/*Declarar metodos dentro de un objeto: Metodos de propiedad*/
const musica={
    reproducir: function(cancion) {
        console.log("reproduciendo la cancion: "+ cancion);
    },
    pausar:function(){
        console.log("En pausa");
    }
};
musica.reproducir('Just feel');
musica.reproducir('Despacito');
musica.pausar();

/*Declara metodos y atributos fuera del objeto*/
musica.borrar = function(id){
    console.log("Borramos cancion con id: "+id);
};
musica.borrar(2);

/*Arrow Function*/

const suma = (a= 0, b= 0 ) =>a+b;
console.log(suma(1,2));
const multiplicacion= a  => a*10;
console.log(multiplicacion(3));

let viajando = function (destino){
    return 'viajando a la ciudad: '+ destino;
}

let viaje = viajando ('Londres');
viaje = viajando('paris');
console.log(viaje);


let viajando2 = destino => `Viajando a la ciudad: ${destino}`;
console.log(viajando2("Paris"));