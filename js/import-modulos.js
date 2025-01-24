import { nombre, PI, suma } from "./export-modulos.js";
import substract from "./export-modulos.js";
import { Circulo } from "./export-modulos.js";

suma(12, 21)
console.log(suma)

// Propiedades

console.log(PI)
console.log(nombre)

// Exportacion por defecto

console.log(substract(23, 45))

// Clases

let myCirculo = new Circulo(10)
console.log(myCirculo)
console.log(myCirculo.area())
