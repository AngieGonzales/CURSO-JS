// OBJETOS

// Crea un objeto con tres propiedades

let animal = {
    especie : "felino",
    color : "negro",
    edad : 2
}
console.log(animal)

// Accede y muestra su valor
console.log(animal.color)
console.log(animal.edad)
console.log(animal.especie)

// Agrega una nueva propiedad

animal.nombre = "Michi"
console.log(animal)

// Elimina una de las tres primeras propiedades
delete animal.edad
console.log(animal)

// Agrega una funcion e invocala
let animal2 = {
    especie : "felino",
    color : "negro",
    edad : 2,
    comer : function(){
        console.log("El animal puede comer")
    }
}
animal2.comer()

// Itera las popiedades del objeto

for (let key in animal2){
    console.log(key + ": " + animal2[key])
}

// Crea un objeto anidado

let carro = {
    modelo : 2023,
    marca : "toyota",
    serie : 3302973,
    moto : {
        color : "negro",
        marca : "dominar",
        cilindraje : 400
    }
}

// Accede y muestra el valor de las propiedades anidadas
console.log(carro.moto.color)
console.log(carro.moto.marca)
console.log(carro.moto.cilindraje)

// Comprueba si los dos objetos anidados son iguales
console.log(carro === carro.moto)

// Comprueba si dos propiedades diferentes son iguales

console.log(carro.marca === carro.moto.marca)