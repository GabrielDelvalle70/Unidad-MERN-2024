//Ejercicio 1
/*const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info; // desestructuración del objeto

console.log(edad);    // salida: 30
console.log(salario); // salida: undefined
*/

//Ejercicio 2
/*const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };

const resultado = { ...objetoA, ...objetoB };

console.log(resultado); // salida: { a: 1, b: 4, c: 5, d: 6 }
*/

//Ejercicio 3
/*function verificar() {

    if (true) {

        const a = 2; // 'a' tiene alcance de bloque
        let b = 3;   // 'b' tiene alcance de bloque
        var c = 4;   // 'c' tiene alcance de función

    }

    console.log(c); // esto funcionará porque 'c' tiene alcance de función. Imprimira 4
    console.log(a); // esto causará un error porque 'a' tiene alcance de bloque. Lanzará un error: ReferenceError: a is not defined
    console.log(b); // esto causará un error porque 'b' tiene alcance de bloque. Lanzará un error: ReferenceError: b is not defined

}

verificar();
*/

//Ejercicio 4
/*const datos = Object.freeze({ nombre: 'Luis', edad: 29 });

datos.edad = 30;

console.log(datos.edad);// el resultado sera 29, no 30.  Esto se debe a que Object.freeze() hace que todas las propiedades del objeto sean no modificables
*/

//Ejercicio 5
/*const original = [1, 2, 3]; // array original

const nuevo = original.concat(4); // crea un nuevo array añadiendo el 4. El método concat devuelve un nuevo array que incluye los elementos del array original más los nuevos elementos que se le pasan como argumento.

console.log(original); // imprime [1, 2, 3]. Permanece sin cambios
console.log(nuevo); // imprime [1, 2, 3, 4]. Contiene el array combinado
*/

//Ejercicio 6
/*const frutas = ['manzana', 'naranja', 'pera', 'mango']; // array principal con 4 valores

const [primera, segunda] = frutas; // array secundario que, mediante la desestructarion de arrays, asigna en las primeras 2 posiciones los primeros 2 valores del array principal

console.log(primera); // imprime en consola el valor 'manzana' que se encuentra en la primera posicion del array

console.log(segunda); // imprime en consola el valor 'naranja' que se encuentra en la segunda posicion del array
*/

//Ejercicio 6 modificado para obtener el tercer elemento del array.
/*const frutas = ['manzana', 'naranja', 'pera', 'mango'];

const [primera, segunda, tercera] = frutas;

console.log(primera); // imprime en consola el valor 'manzana' que se encuentra en la primera posicion del array.

console.log(segunda); // imprime en consola el valor 'naranja' que se encuentra en la segunda posicion del array

console.log(tercera); // imprime en consola el valor 'pera' que se encuentra en la tercera posicion del array.
*/

//Ejercicio 7
/*for (let i = 0; i < 3; i++) { // declara la variable 'i' con let, iniciandola con 0, este bucle se ejecutara 3 veces tomando los valores 0, 1 y 2

    for (let i = 0; i < 2; i++) { // dentro de cada iteración del primer bucle, se declara otra variable 'i' con let y se inicializa con 0. Este bucle se ejecutara 2 veces, 'i' tomara los valores 0 y 1 

        console.log(i); // imprimira los valores: 0 1 0 1 0 1 . Cada valor de 'i' es independiente dentro de su propio ámbito de bloque

    }

}
*/

//Ejercicio 8
/*const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const combinado = { ...objeto1, ...objeto2 }; // sobrescribe las propiedas del "objeto1" con las del "objeto2" 

console.log(combinado); // imprime {a: 1, b: 3, c: 4}*/

//Ejercicio 8 modificado para evitar sobrescribir la propiedad 'b'
/*const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const objeto2Renombrado = { b2: objeto2.b, c: objeto2.c };

const combinado = { ...objeto1, ...objeto2Renombrado }; 

console.log(combinado); // imprime { a: 1, b: 2, b2: 3, c: 4 }
*/

//Ejercicio 9
/*const numeros1 = [1, 2, 3];

const numeros2 = [3, 4, 5];

const combinados = [...numeros1, ...numeros2]; // el operador spread (...) toma todos los elementos de "numeros1" y "numeros2" y los coloca en el nuevo array "combinados"

console.log(combinados); // imprime: [1, 2, 3, 3, 4, 5]
*/

//Ejercicio 10
/*function demostracion() {
    var nombre = 'Ana'; // variable 'nombre' declarada con 'var'
    let edad = 25;      // variable 'edad' declarada con 'let'

    if (true) {
        var nombre = 'Luis'; // redeclara y sobrescribe 'nombre' en el mismo alcance de función
        let edad = 30;       // nueva variable 'edad' en el alcance del bloque 'if'
    }

    console.log(nombre); // imprime 'Luis' porque 'nombre' fue sobrescrito en el alcance de la función
    console.log(edad);   // imprime '25' porque la 'edad' dentro del 'if' es diferente y tiene un alcance de bloque
}

demostracion(); // llamado a la funcion "demostracion"
*/