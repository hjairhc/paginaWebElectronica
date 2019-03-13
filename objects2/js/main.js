
/*Object literal*/
const persona = {
    nombre: "antonio",
    edad: 30,
    anioNacimiento: function(){
        return new Date().getFullYear() -this.edad;
    }
};

/*Object constructor*/
console.log(persona.anioNacimiento());

function Tarea (nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

/*Crear objetos de tarea*/
const tarea1 = new Tarea("Aprender JS", "Urgente");
const tarea2 = new Tarea("Configurar servidores", "Urgente");
const tarea3 = new Tarea("Sqalir al baño", "Baja");

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);

class Tarea2{
    constructor(nombre, urgencia){
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

const tarea4 = new Tarea2("Ir al Big Yellow", "Urgente");
console.log(tarea4);

/*Scope en JavaScript (visibilidad de una variable)*/
/*let musica = "Rock";

if(musica){
    let musica = "Grunge";
    console.log("Dentro del if "+musica);
}
console.log("FUera del if "+musica);
*/
/*Object Destructuring es la forma en que obtienes valores de un objeto*/

//Forma anterior de como se obtenia una variable de un objeto
const cliente = {
  nombre : "Jair",
  tipo : "Premium",
    datos:{
      ubicacion:{
          ciudad: "de Mexico",
          pais: "Mexico"
      },
      cuenta:{
          desde: "10-12-2014",
          saldo: 3000
      }
    },
    gustos:{
      musica: ["Pop", "Rock", "Ucranian pop", "reggae"]
    }
};
console.log(cliente);

/*Crear una variable*/
const nombreCliente = cliente.nombre;
console.log(nombreCliente);

//Con la forma nueva de Destructuring es mas sencillo
let {nombre, tipo} = cliente;
console.log(nombre, tipo);

let {datos:{cuenta:{desde}}, gustos} = cliente;
console.log(desde);

let {gustos:{musica: [,,indice]}} = cliente;
console.log(indice);

/*Object literal enhacement*/

const banda = "Metallica",
    genero = "Heavy metal",
    canciones = ["Master off puppets", "Seek & Destroy", "Enter Sandman"];
//Integrar a un objeto de la forma anterior
const metallica1 ={
    banda: banda,
    genero: genero,
    canciones: canciones,
};
console.log(metallica1);

//La forma nueva es igual pero
const metallica2 ={
    banda,
    genero,
    canciones,
};
console.log(metallica2);

/*Nuevas funciones en javaScript*/
const personas = [
    {nombre : "Antonio", edad: 40},
    {nombre : "Jose", edad: 50},
    {nombre : "Alejandro", edad: 23},
    {nombre : "Gabriela", edad: 18, aprendiendo: "JavaScript"},
    {nombre : "Gabriela", edad: 30, aprendiendo: "Python"},
    {nombre : "Jair", edad: 30},
    {nombre : "Kruno", edad: 33},
];

const mayores = personas.filter(personas => personas.edad < 25);
console.log(mayores);

//Usar una funcion para obtener un objeto en especifico
const gabriela = personas.filter(personas => personas.nombre === "Gabriela" && personas.edad >29);
console.log(gabriela);

let {aprendiendo} = gabriela;
console.log(aprendiendo);

/*reduce que trae un acumulado de los regustros*/
let total = personas.reduce((edadTotal, persona) =>{
    return edadTotal + persona.edad;
}, 0);
console.log(total);

