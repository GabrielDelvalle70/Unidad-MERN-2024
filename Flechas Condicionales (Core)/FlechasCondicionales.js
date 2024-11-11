//Ejercicio 1
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;

console.log(convertirCelsiusAFahrenheit(25));

//Ejercicio 2
const generarMensaje = (nombre, edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;

console.log(generarMensaje('Juan', 30)); 

//Ejercicio 3
const convertirMillasAKilometros = millas => millas * 1.60934;

// Ejemplo de uso:
console.log(convertirMillasAKilometros(10)); // 16.0934

//Ejercicio 4
const queLlevar = clima => clima === 'lluvia' ? 'Lleva un paraguas.' : clima === 'sol' ? 'Lleva un sombrero.' : 'Clima no reconocido.';

console.log(queLlevar('lluvia')); 
console.log(queLlevar('sol'));
console.log(queLlevar('neblina')); 
