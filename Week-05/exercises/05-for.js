console.log("-------EXERCISE 5 : FOR-------");

/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
 una alerta utilizando cada una de las palabras.
*/

console.log("Exercise 5.a");

var days = ["monday", "tuesday", "wendesday", "thursday", "friday"];

for (var i = 0; i < days.length; i++) {
  alert(days[i]);
}

/* Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
 modificada.
*/

console.log("Exercise 5.b");

for (var i = 0; i < days.length; i++) {
  alert(days[i][0].toUpperCase() + days[i].slice(1));
}

/* Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta
con la cadena completa.*/


console.log("Exercise 5.c");

var sentence = "";
for (var i = 0; i < days.length; i++) {
  sentence += days[i];
}
alert(sentence);

/*Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

console.log("Exercise 5.d");

var numbers = [];

for (var index = 0; index < 10; index++) {
  numbers += index;
}
console.log(numbers);