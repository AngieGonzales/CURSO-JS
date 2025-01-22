// FUNCIONES

//Crea una funcion que reciba dos numeros y devuelva su suma

function suma(a, b) {
    console.log(a + b)
}
suma(5, 90)

// Crea una funcion que reciba un array de numeros y devuelva el menor de ellos

let numeros = [1, 34, 78, 56, 2, 96]

function mayor (numeros){
    if (numeros.length === 0){
        return "El array esta vacio"
    }
    return numeros.reduce((mayor, numero) => {
        return numero > mayor ? numero: mayor
    })
}
console.log(`El numero mayor es: ${mayor(numeros)}`)

// Crea una funcion que reciba un string y devuelva el numero de vocales que tiene

let texto = "Hola, yo soy angie"
let contadorVocales = 0
let vocales = "aeiouAEIOU"

function contarVocales(vocales, texto){
    for (let i = 0; i < texto.length; i++){
        if (vocales.includes(texto[i])){
            contadorVocales++
        }
    }
}

contarVocales(vocales, texto)
console.log(`El numero de vocales que contiene el texto es de: ${contadorVocales} vocales`)

// Crea una funcion que reciba una array de strings y devuelva un nuevo array con las strings en mayusculas

const palabras = ["hola", "mundo", "javascript"];

function convMayusculas(palabras) {
    const arrayMayusculas = [];

    for (let i = 0; i < palabras.length; i++) {
        arrayMayusculas.push(palabras[i].toUpperCase());
    }
    return arrayMayusculas;
}
const palabrasMayus = convMayusculas(palabras);

console.log(palabrasMayus);

// Crea una funcion que reciba un numero y devuelva true si es primo y false en caso contrario

function returnNumero (numero){
    if (numero <= 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return false
        }
    }
    return true
}
console.log(returnNumero(11))

// Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1,3,5,7]
let array2 = [3,5,11,9]

function compararArray (array1, array2){
    return array1.filter(elemento => array2.includes(elemento))        // Filter = Encontrar elementos comunes
}
let comunes = compararArray(array1, array2)

console.log(comunes)


// Crea una funcion que reciba un array de numeros y devuelva todos los numeros pares

let numbers = [2,5,8,10,12,3]

function returnPares (numbers){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            console.log(numbers[i])
        }
    }
}
returnPares(numbers)

// Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

let digitos = [2,3,4,5]

function elevarAlCuadrado (digitos){
    let cuadrados = []
    for (let i = 0; i < digitos.length; i++){
        cuadrados.push(digitos[i]**2)
    }
    return cuadrados
}
let resultado = elevarAlCuadrado(digitos)
console.log(resultado)

// Crea una funcion que reciba una cadena de texto y devuelva la misma cadena de texto con las palabras en orden inverso

let words = "Funcion para invertir el orden de las palabras"

function invertirWords (words){
    let palabras = words.split(" ")
    palabras.reverse()
    return palabras.join(" ")
}

let textoInvertido =invertirWords(words)
console.log(textoInvertido)

// Crea una funcion que calcule el factorial de un numero dado

let numero1 = 6

function calcularFactorial (numero1){
    let resultado = 1
    for (let i = 1; i <= numero1; i++){
        resultado *= i
    }
    return resultado
}
console.log(calcularFactorial(numero1))