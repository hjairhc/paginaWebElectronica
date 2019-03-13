"use strict";
/*Tipos de variables*/
    var main = function () {
    var mensaje = "Es un mensaje";
    var pi = 3.1416;
    var numero1="1";
    var numero2= "1"
    console.log(numero1+numero2);
    var numero = 876254272;
    console.log(numero);
    var esDivertido = true;
    console.log(mensaje);
    console.log(pi);
    console.log(esDivertido);
};

main();
/*METODOS DE CONSOLE*/
console.table([1,2,3,4]);
console.warn("Ten cuidado puñetas");
console.error("Existe un error");
console.time("Contador");
/*Todas las sentencias*/
for(var i=10; i--;)
{
    console.log(i)
}
console.timeEnd("Contador");

/*Formas para crear variables*/
let nombre="";
console.log(nombre);
nombre = "jair";
console.log(nombre);

nombre= "Juan";

console.log(nombre);

let nombre3 = "Rodrigo";
console.log(nombre3);

const PI = 3.1416;
console.log(PI);

const divmensaje = document.getElementById("mensaje");
/*No USAR VAR!!!!!!!!!!!!!!!!!!!!!! Solo let y const*/


/*CADENAS de JavaScript*/
let cadena;
cadena = "Jair";
let esBueno = "Me gusta";
let lenguaje = "JavaScript";

console.log(esBueno+lenguaje);

let grupo = "Molotov", cancion = "yoyo";
console.log(grupo.length);

grupo = grupo.concat(" ", ": son muy buenos");
grupo = grupo.toUpperCase();
console.log(grupo);
/*Separar cadenas de texto*/

cadena = grupo;
cadena = cadena.split(" ");
console.log(cadena);


//_________________________________________________________
//Funcion replace(), includes(), repeat(), number()
//Replace()
let str = "Vamos al sitio !";
console.log(str);
let res = str.replace("sitio", "Big Yellow");
console.log(res);

//Includes()
let array1 = [1, 2, 3];
console.log("Incluye el 2?: " + array1.includes(2));
let pets = ['cat', 'dog', 'bat'];
console.log("Incluye cat?: " +pets.includes('cat'));
console.log("Incluye at?: " +pets.includes('at'));

//Repeat()
str = "Esta frase se va a repetir!";
let nueva = str.repeat(3);
console.log(nueva);

//Comparación al convertir cadenas de carácteres al usar Number contra parseInt y parseFloat.
//number()
let x1 = true;
let x2 = false;
let x3 = 3.1416;
let x4 = "999";
let x5 = "999 888";

let n = Number(x1) + " " +
    Number(x2) + " " +
    Number(x3) + " " +
    Number(x4) + " " +
    Number(x5);
console.log(n);
//parseInt
n = parseInt(x1) + " " +
    parseInt(x2) + " " +
    parseInt(x3) + " " +
    parseInt(x4) + " " +
    parseInt(x5);
console.log(n);
//parseFloat
n = parseFloat(x1) + " " +
    parseFloat(x2) + " " +
    parseFloat(x3) + " " +
    parseFloat(x4) + " " +
    parseFloat(x5);
console.log(n);

//toFixed(), string(), date()
let num = 5.56789;
n = num.toFixed(2);
console.log(n);

//String()
let txt = 25;
txt = String(txt);
console.log(txt);

//date()
x1=new Date();
console.log(x1);



/*Uso de typeof*/
let lenguajes = ["HTML5", "JS", "PHP"];
console.log(typeof  lenguajes);

/*Declaración de un objeto*/
let persona = {
    nombre: "Jair", paterno: "Hernández"
};

console.log(persona);

const numeros=[1,2,3,4,5];
console.log(numeros);
console.table(numeros);
const meses = new Array("Enero", "Febrero", "Marzo");
console.log(meses);
console.log(meses[1]);
console.log(meses.length);

Array.isArray(meses);

/*Para el manejo de Arreglos investigar
* Push(), unshift(), pop(), shift(), splice()
   * reverse(), sort()*/
//push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
console.log("     ");

//unshift()
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
console.log("     ");

//pop()
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log("     ");

//Shift()
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log("     ");

//splice()
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
console.log("     ");

//reverse()
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.reverse();
console.log(fruits);
console.log("     ");

//sort()
fruits = ["Banana", "Orange", "Apple", "Mango", "n", "y", "s"];
console.log(fruits);
fruits.sort();
console.log(fruits);
console.log("     ");
