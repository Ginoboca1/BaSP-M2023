console.log("-------EXERCISE 4 : IF ELSE-------");

/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que
 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje
  “Lower than 0,5”.
*/

console.log("Exercise 4.a");

var random = Math.random();
if (random >= 0.5) {
  alert("Greater than or equal to 0,5");
} else {
  alert("Lower than 0,5");
}

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
1-“Bebe” si la edad es menor a 2 años;
2-“Niño” si la edad es entre 2 y 12 años;
3-“Adolescente” entre 13 y 19 años;
4-“Joven” entre 20 y 30 años;
5-“Adulto” entre 31 y 60 años;
6-“Adulto mayor” entre 61 y 75 años;
7-“Anciano” si es mayor a 75 años.
*/

console.log("Exercise 4.b");

var age = Math.floor(Math.random() * 101);
console.log(age);

if (age < 2) {
  console.log("Bebe");
} else if (age >= 2 && age <= 12) {
  console.log("Niño");
} else if (age >= 13 && age <= 19) {
  console.log("Adolescente");
} else if (age >= 20 && age <= 30) {
  console.log("Joven");
} else if (age >= 31 && age <= 60) {
  console.log("Adulto");
} else if (age >= 61 && age <= 75) {
  console.log("Adulto mayor");
} else if (age >= 75) {
  console.log("Anciano");
} else {
  console.log("Error");
}
