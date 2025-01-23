// Concatena dos cadenas de texto

let nombre = "Angie Katherine"
let apellido = "Gonzales Acuña"
console.log(`Hola, ${nombre} ${apellido} gusto en saludarte`)

//Muestra la longitud de una cadena de texto

console.log(nombre.length)

// Muestra el primer y ultimo caracter de un string
console.log(apellido[0])
console.log(apellido[13])

// Convierte a mayusculas y minuculas un string
console.log(apellido.toUpperCase())
console.log(nombre.toLowerCase())

// Crea una cadena de texto en varias lineas
let texto = `Hola, esta es
una cadena de texto
en varias lineas`

// Interpola el valor de una variable en un string
let variable = "Mundo"
let mensaje= `Hola ${variable}`
console.log(mensaje)

// Reemplaza todos los espacios en blanco de un string por guiones
let blanco = "    Holi como estas    "
console.log(blanco.replaceAll(" ", "-"))

// Comprueba si una cadena de texto tiene una palabra concreta
let string = "Mi nombre Angie "
console.log(string.includes("Angie"))
console.log(string.includes("yo"))

// Comprueba si dos strings son iguales
let a = "uno"
let b = "Uno"
console.log(a === b)

// Comprueba si dos strings tienen la misma longitud
console.log(a.length === b.length)
