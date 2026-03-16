/* Importo la constante PI y la función sumar del módulo matematica. */
import {multiplicar, PI, sumar, dividir, restar} from '../src/modules/matematica.js';
let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
let totalDiv = dividir(numero1, numero2)
let totalRes = restar(numero1, numero2)
let totalMul = multiplicar(numero1, numero2)

console.log(`sumar(${numero1}, ${numero2}) = ${total}`);
console.log(`restar(${numero1}, ${numero2}) = ${totalRes}`);
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalMul}`);
console.log(`dividir(${numero1}, ${numero2}) = ${totalDiv}`);