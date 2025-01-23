// Extraer valores de arrays u objetos y asignarlos a variables

// Desestruccturacion de arrays (desestructura creando nuevas variables con cualquier nombre y va llenando las nuevas variables en orden)

let animales = ["leon", "pantera", "tigre", "cocodrilo"]   

let [animal1,,, animal4] = animales     // Usar las comas para evitar escribir todos los elelmentos
console.log(animal1)                    // si vas a omitir 5 elementos poner 6 comas, siempre una mas
console.log(animal4)

let animales2 = ["leon", "pantera", "tigre", "cocodrilo", "elefante", "conejo"]

let [animals1,...restoAnimales] = animales2      // speed operator (...)

console.log(restoAnimales)

// Desestructuracion de objetos  (desestructura usando el nombre de la clave)

let frutas = {
    tropicales : "piña",
    rojas : "mora",
    acidas : "naranja",
    dulces : "manzana",
}

let {rojas,...restoFrutas} = frutas
console.log(restoFrutas)
//------------------------------------------------------
// desestructuracion de objetos con nuevos nombres de variable

let {tropicales: tropical2, rojas: roja2, acidas: acida2, dulce: dulce2 } = frutas
console.log(tropical2)
console.log(roja2)

// Desestructuracion de objetos anidados
let persona3 = {
    name : "kathe",
    lastname : "acuña",
    walk : function (){
        console.log("La persona camina")
    },
    job : {
        name : "desarrollador",
        exp : 1,
        work : function(){
            console.log("La persona trabaja")
        }
    }

}
let {name, lastname, job:{name : nameJob}}=persona3

console.log(name)
console.log(nameJob)

//PROPAGACION (...) forma de llevar los datos de un elemento a otro y añadir mas, hacer una especie de copia

// Arrays

let myArray = [1, 2, 3, 4]

let myArray2 = [...myArray] // Copia
let myArray3 = [...myArray2, 5,6,7]

console.log(myArray2)
console.log(myArray3)

// Combinacion de arrays

let myArray4 = [...myArray2,...myArray3]
console.log(myArray4)

// Objetos

let persona4 = {...persona3} // Copia
console.log(persona4)

let persona5 = {...persona4, email : "angieqgmail.com"}
console.log(persona5)
