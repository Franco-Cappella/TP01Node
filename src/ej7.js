import { getCurrencyAbbreviation } from "country-currency-map";
let monedaDelPais, codigoPais;
codigoPais = 'Argentina';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {

    let msj = getCurrencyAbbreviation(codigoPais)
    if (msj === undefined) {
        return null
    }
    return msj;
}