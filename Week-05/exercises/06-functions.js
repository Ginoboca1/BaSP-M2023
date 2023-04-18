console.log("-------EXERCISE 6 : FUNCTIONS-------");

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del
navegador 
*/

console.log("Exercise 6.a");

var suma = function (a, b) {
  return a + b;
};

var result = suma(1, 2);

console.log(result);

/*Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
  número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor 
  NaN como resultado.
*/

console.log("Exercise 6.b");

var suma = function (a, b) {
  if (typeof a !== Number || typeof b !== Number) {
    alert("Uno de los parametros tiene un error");
    return NaN;
  }
  return a + b;
};

var result = suma("uno", 2);

/*Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
entero.
*/

console.log("Exercise 6.c");

var validateInteger = function (num) {
  if (num % 1 === 0) {
    return true;
  } else{
    return false;
  }
};

console.log(validateInteger(2.5));

/*Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar
el número convertido a entero (redondeado). */

console.log("Exercise 6.d");

var sumaAndValidate = function (a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    alert("One of them is not a number");
    return NaN;
  } else {
    if (validateInteger(a) && validateInteger(b)) {
      return a + b;
    } else if (!validateInteger(a)) {
      alert("A is not a Integer");
      return Math.round(a);
    } else if (!validateInteger(b)) {
      alert("B is not a Integer");
      return Math.round(b);
    }
  }
};

console.log(sumaAndValidate(2, 2.2));

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
que todo siga funcionando igual que en el apartado anterior. */

console.log("Exercise 6.e");

var validation = function (a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    alert("One of them is not a number");
    return NaN;
  } else {
    if (validateInteger(a) && validateInteger(b)) {
      return true;
    } else if (!validateInteger(a)) {
      alert("A is not a Integer");
      return Math.round(a);
    } else if (!validateInteger(b)) {
      alert("B is not a Integer");
      return Math.round(b);
    }
  }
};

var test = function (a, b) {
  if (validation(a, b) === true) {
    return a + b;
  } else {
    return validation(a, b);
  }
};

console.log(test(2, 2.2));
