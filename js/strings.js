// Strings
let name = "Angie"
let gretting = "Hola, " + name
console.log(gretting)

let nombre = "Katherine"
let saludo = `Hola, como estas ${nombre}`
console.log(saludo)

// Longitud
console.log(saludo.length)
console.log(gretting.length)

//Acceder a caracteres
console.log(gretting[10])
console.log(saludo[15])

// Metodos comunes
console.log(gretting.toLowerCase())
console.log(saludo.toUpperCase())
console.log(gretting.indexOf("Angie"))
console.log(saludo.indexOf("Maria"))
console.log(gretting.includes("Angie"))
console.log(saludo.includes("Como"))
console.log(saludo.slice(0, 9))
console.log(gretting.slice(5, 15))
console.log(saludo.replace("Angie", "Gonzales"))
console.log(gretting.replace("Hola", "Buenos Dias"))

//Templates Literals

let message = `Hola, este es
mi ejercicio de
plantillas literales`
console.log(message)

let email = "MariaDolores@jejeje"
console.log(`Hola, ${name} este es tu correo ${email}`)