// Crea un bucle que imprima los numeros del 1 al 20

for (let i = 1; i <= 20; i++){
    console.log(i)
}

// Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let suma = 0

for (let i = 1; i <= 100; i++){
    suma += i
}
console.log("Esta es la suma de todos los numeros del 1 al 100",suma)

// Crea un bucle que imprima todos los numeros pares entre 1 y 50

let numero = 2

for (let i = 2; i <= 50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// Dado un array de nombres usa un bucle para imprimir cada nombre en la consola

let array = ["Angie", "Camila", "Juan", "Felipe"]

for (let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Escribe el bucle que cuente el numero de vocales de una cadena de texto

let texto = "Hola, yo soy angie"
let contadorVocales = 0
let vocales = "aeiouAEIOU"

for (let i = 0; i < texto.length; i++){
    if (vocales.includes(texto[i])){
        contadorVocales++
    }
}
console.log(`La cantidad de vocales que tiene la cadena de texto es de ${contadorVocales} vocales`)

// Dado un array de numeros, usa un bucle para multiplicar los numeros y mostrar el producto

let numeros = [1,2,3,4,5,6,7,8,9]
let multiplicar = 1

for (let i = 1; i < numeros.length; i++){
    multiplicar *= i
}
console.log(`El resultado de la multiplicacion de los numeros es de: ${multiplicar}`)

// Escribe un bucle que imprima la tabla de multiplicar del 5

let multi = 5

for (let i = 1; i <= 10; i++){
    console.log(`${multi} X ${i} = ${multi * i}`)
}

