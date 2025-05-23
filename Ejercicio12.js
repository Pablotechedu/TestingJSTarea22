/*Paso 1: En lugar de fabricar robots individuales como lo hemos 
estado haciendo, creemos una fábrica que funcione para 
fabricar robots como queramos!

Cree una función de fábrica llamada robotFactory con 
dos parámetros model y mobile. 
Haga que la función devuelva un objeto. 
En el objeto, agregue una clave model con el valor del parámetro model. 
Agregue otra propiedad con una clave mobile con el valor del parámetro mobile.

Luego, agregue un método nombrado beep sin un parámetro 
que registrará 'Beep Boop' en la consola.

Paso 2: Usa tu función de fábrica declarando una variable const llamada tinCan. 
Asígnala a tinCan el valor de la llamada robotFactory con el primer argumento de 'P-500' y el segundo argumento de true.

Paso 3: Vamos a revisar lo que tinCan puede hacer. Realiza una llamada a .beep de tinCan. ¿Qué ves en la consola?*/

// Paso 1
function robotFactory(model, mobile) {
  // Definimos la función robotFactory
  return {
    // Retornamos un objeto
    model: model,
    mobile: mobile,
    beep: function () {
      // Definimos el método beep
      console.log("Beep Boop"); // Imprimimos 'Beep Boop' en la consola
    },
  };
}

// Paso 2
const tinCan = robotFactory("P-500", true); // Creamos el objeto tinCan usando la función robotFactory
// Paso 3
tinCan.beep(); // Llamamos al método beep de tinCan
// Esto imprimirá 'Beep Boop' en la consola
