// Exportacion de modulos

export function suma (a,b){
    return a + b
}
console.log(suma(20, 20))

// Propiedades

export const PI = 3.1416
export let nombre = "Angie"

// Exportacion por defecto      solo podemos exportar por defecto funciones

export default function substract(a, b){
    return a - b
}

// Clases

export class Circulo {
    constructor(radio){
        this.radio = radio
    }
    area (){
        return Math.PI * Math.pow(this.radio, 2)
    }
}