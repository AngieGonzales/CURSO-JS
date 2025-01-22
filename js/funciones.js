// Funciones

// Simples
function myFirstFunction (){
    console.log("Mi primer funcion")
}
for (let i = 0; i < 5; i++){
    myFirstFunction()
}

// con parametros
function functionWithParameters (name){
    console.log(`Hola, ${name}`)
}
functionWithParameters("Angie")
functionWithParameters("Katherine")

// Funciones anónimas

const funct2 = function (name){
    console.log(`Hola, ${name}`)
}
funct2("Angie Gonzales")

// Arrow functions ( funciones flecha)}

const funct3 =(name) => {
    console.log(`Hola, ${name}`)
}
funct3("Kathe")

// Parameters

function suma (a,b){
    console.log(a + b)
}
suma(4, 9)
suma() //NaN

function suma2 (a = 0, b = 0){
    console.log(a + b)
}
suma2(a = 79)
suma2(1)
suma2()
suma2(2,6)

// Retorno de valores

function multiplicar (a, b){
    return a * b
}
console.log(multiplicar(10, 5))

//Funciones anidadas

function externa (){
    console.log("Funcion externa")
    function interna (){
        console.log("funcion interna")
    }
    interna()   //Debo llamar a funcion interna dentro de funcion externa (scope)
}
externa()
//interna()   ERROR: Fuera del scope

// Funciones de orden superior (Funciones que reciben otras funciones como argumentos)
 
function applyFunct (funct, param){
    funct(param)
}
applyFunct(funct3, "Funciones de orden superior")

// Foreach (sirve para ejecutar bucles asociados a elementos iterables)

myArray = [1,2,3,4,5]

myArray.forEach(function (value){
    console.log(value)
});

myArray.forEach((value) => console.log(value)) // Segunda forma de hacerlo


//------------------------------
myMap = new Map([
    ["nombre", "Angie"],
    ["apellido", "Gonzales"],
    ["edad", 19],
    ["correo", "angie123@gmail.com"]
])

myMap.forEach((value) => console.log(value))

//---------------------------------
mySet = new Set(["Angie", "Gonzales", "Acuña", 2, 4])

mySet.forEach((value) => console.log(value) )