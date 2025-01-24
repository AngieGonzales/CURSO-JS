// Importa una funcion

import { multiplicar, nombre, Persona } from "./excercices-export-modulos.js";
import dividir from "./excercices-export-modulos.js";

console.log(multiplicar(2, 8))

// Importa una constante

console.log(nombre)

// Importa una clase

let myPersona = new Persona("dayana", "acuña", 34)
console.log(myPersona)

// Importa una funcion, una constante y unaclase por defecto

// Funcion

console.log(dividir(20, 2))

