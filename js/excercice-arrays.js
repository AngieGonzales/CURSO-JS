// Crea un array que almavene 5 animales

let myArray = ["León", "Gallina", "Perro", "Puma", "Leopardo"]

// Añade dos mas, uno al principio  otro al final
myArray.push("Elefante")
myArray.unshift("Conejo")

console.log(myArray)

//Elimina el que se encuentra en la terceraposicion

myArray.splice(3, 1)
console.log(myArray)

//Crea un set que almacene 5 libros

let mySet = new Set()

mySet = new Set(["La Iliada", "La Voragine", "Romeo y Julieta", "Viva la Musica", "Los Miserables"])

//Añade dos, uno de ello repetido
mySet.add("Ana Frank", "La Iliada")
console.log(mySet)

// Elimina uno concreto a tu eleccion
mySet.delete("Romeo y Julieta")
console.log(mySet)

// Crea un mapa que asocie el numero del mes a su nombre
let myMap = new Map()

myMap = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre",],
    [11, "noviembre",],
    [12, "diciembre",],
])
console.log(myMap)

//Comprueba si el mes numero 5 existe en el map e imprime su resultado
console.log(myMap.has(5))

//Añade al mapa una clave con un array como que almacene los meses del año
myMap.set("todosLosMeses", [
    "enero", "febrero", "marzo", "abril", "mayo", 
    "junio", "julio", "agosto", "septiembre", "octubre",
    "noviembre", "diciembre"
])
console.log(myMap)

//Crea un array, transformalo en un set y almacenalo en un map

let array = ["uno", "dos", "tres"] // Creaa el array
console.log(array)

let set = new Set(array) // Convierto a set
console.log(set)

let map = new Map() // Almaceno en map
map.set("variable", set)

console.log(map)