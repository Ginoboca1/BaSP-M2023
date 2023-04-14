console.log("-------EXERCISE 3 : ARRAYS-------");

/* Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log("Exercise 3.a");

var monthsArray = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log(monthsArray[4], monthsArray[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log("Exercise 3.b");

var monthsArrayOrder = monthsArray.sort();

console.log(monthsArrayOrder);

/* Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log("Exercise 3.c");

monthsArray.push("cafe");
monthsArray.unshift("medialuna");

console.log(monthsArray);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log("Exercise 3.d");

monthsArray.shift();
monthsArray.pop();

console.log(monthsArray);

/*Invertir el orden del array (utilizar reverse)*/

console.log("Exercise 3.e");

monthsArray.reverse();

console.log(monthsArray);

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
(utilizar join) */

console.log("Exercise 3.f");

var monthString = monthsArray.join("-");

console.log(monthString);

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)*/

console.log("Exercise 3.g");

var mayToNov = monthsArray.slice(4, 11);

console.log(mayToNov);
