// Exporta una funcion

export function multiplicar(a, b){
    return a * b
}

// Exporta una constante

export const nombre = "Katherine"

// Exporta una clase

export class Persona {
    constructor(name, apellido,edad){
        this.name = name
        this.apellido = apellido
        this.edad = edad
    }
}

// Exporta una funcion, una constante y una clase por defecto     // Solo podemos exportar funciones por defecto

// Funcion

export default function dividir(a, b){ 
    return a / b
} 

