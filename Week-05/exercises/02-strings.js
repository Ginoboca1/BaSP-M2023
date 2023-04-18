console.log("-------EXERCISE 2 : STRINGS-------");

/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
mayúscula (utilizar toUpperCase). */

console.log("Exercise 2.a");

var str = "bocacorsicopicolino";
var strUpper = str.toUpperCase();

console.log(strUpper);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log("Exercise 2.b");

var str = "bocacorsicopicolino";
var newStr = str.substring(0, 5);

console.log(newStr);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log("Exercise 2.c");

var str = "bocacorsicopicolino";
var newStr = str.substring(16, 19);

console.log(newStr);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
 letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
 (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log("Exercise 2.d");

var str = "bocacorsicopicolino";
var strUpper = str[0].toUpperCase() + str.substring(1);

console.log(strUpper);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log("Exercise 2.e");

var str = "I like pizza";
var blinkSpace = str.indexOf(" ");

console.log(blinkSpace);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
el operador +) */

console.log("Exercise 2.f");

var str = "ornitorrino naringologo";
var blankSpace = str.indexOf(" ");
var firstWord = str.substring(0, blankSpace);
var secondWord = str.substring(blankSpace + 1);

var myUpperStr =
  firstWord[0].toUpperCase() +
  firstWord.substring(1).toLowerCase() +
  " " +
  secondWord[0].toUpperCase() +
  secondWord.substring(1).toLowerCase();
  
console.log(myUpperStr);
