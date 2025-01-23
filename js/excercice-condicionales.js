// Imprime por consola tu nombre si una variable toma su valor

let variable = "Maria"
let nombre = "Angie"
 
if (variable == nombre){
    console.log(`${nombre}`)
}
else {
    console.log("Ninguna variable a coincidido con tu nombre")
}

// Imprime por consola un mensaje si el usuario y contraseña coinciden con unos establecidos

let user = "Angie"
let password = 12345

if (user == "Angie" && password == 12345){
    console.log("Inicio de sesion exitoso")
}
else {
    console.log("Credenciales incorrectas")
}

// Verifica si un numero es negativo, positivo o cero e imprime un mensaje

let numero = 0

if (numero <  0){
    console.log("Este es un numero negativo")
}
else if (numero > 0){
    console.log("Este numero es positivo")
}
else{
    console.log("Este numero es el cero")
}

// Verifica si una persona puede votar o no e indica cuantos años le falta
let edad = 16

if (edad < 18){
    console.log(`No puedes votar, te faltan ${18 - edad} años`)
}
else {
    console.log("Puedes votar")
}

// Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let edad2 = 10

let categoria = edad2 < 18 ? "Eres menor" : "Eres mayor"
console.log(categoria)

//Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "marzo"
let estacion

switch (mes.toLowerCase()){
    case "enero":
    case "febrero":
    case "marzo" :
        estacion = "Verano"
        break
    case "abril":
    case "mayo":
    case "junio":
        estacion = "Otoño"
        break
    case "julio":
    case "agosto":
    case "septiembre":
        estacion ="Primavera"
        break
    case "octubre":
    case "noviembre":
    case "diciembre":
        estacion = "Invierno"
        break
}
console.log(`Estamos en ${estacion}`)

// Muesta el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior

let numeroDias 
switch (mes.toLowerCase()){
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        numeroDias = 30
        break
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        numeroDias = 31
        break
    case "febrero":
        numeroDias = 28
        break
        default:
            numeroDias = "Nombre de mes incorrecto"
}
console.log(`${mes} tiene ${numeroDias} dias`)

// Usa un switch para imprimir un mesaje de saludo diferente dependiendo del idioma

let idioma = "frances"
let saludo
switch (idioma.toLowerCase()){
    case "frances":
        saludo = "Bonjour chers collègues"
        break
    case "ingles":
        saludo = " Good morning my friends"
        break
    case "español":
        saludo = "Buenos dias a todos"
        default:
            saludo = "No contamos con ese idioma"
}
console.log(saludo)