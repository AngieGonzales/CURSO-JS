// Crea una variable para cada operación aritmetica

let a = 10
let b = 15
let c = 20
let d = 25
let e = 3
let f = 5

console.log(a + b + c)
console.log(a + c -d)
console.log(d - a * 3)
console.log((a + b)*c)
console.log((25 * 20)/2)

//Crea una variable para cada tipo de asignacion,. que haga uso de las variablees utilizadas en el ejercicio anterior

let sumar = 4
console.log(sumar)
sumar += a
console.log(sumar)

let restar = 50
console.log(restar)
restar -= b
console.log(restar)

let dividir = 200
console.log(dividir)
dividir /= c
console.log(dividir)

let multiplicar = 20
console.log(multiplicar)
multiplicar *= d
console.log(multiplicar)

let resto = 100
console.log(resto)
resto %= e
console.log(resto)

let exponente = 2
console.log(exponente)
exponente **= f
console.log(exponente)

//Imprime 5 operaciones verdades con diferentes operadores de comparacion

let g= 10
let h= 20
let i = 30
let j = 10
let k = 20

console.log(g < h)
console.log(i !== j)
console.log(k === h)
console.log(i > g)
console.log(g === j )

console.log("-------------------------------")

//Imprima 5 operaciones falsas con diferentes operadores de comparacion
console.log(g === h )
console.log(j > i )
console.log(k < g )
console.log(h !== k )
console.log(j > k )

console.log("-------------------------------")

// Utiliza el comparador logico and
console.log(g < h && k > j )
console.log(j < i && h === j)
console.log(i !== k && j === h)
console.log(k < i && i === h)
console.log(h === 20 && k !== 25)

console.log("-------------------------------")

//Utiliza el operador logico or
console.log(g < h || k > j)
console.log(i === k || j > i)
console.log(h !== h || k < j)
console.log(g > h || k !== j)
console.log(g < h || k === j)

console.log("-------------------------------")

//Utiliza ambos operadores logicos
console.log( g < h && h < i || i < j)
console.log(i === j && k !== k || k > g)
console.log(k < i && g > k || j === i)

console.log("-------------------------------")

// Añade alguna negacion
console.log(!( g < h && h < i || i < j))
console.log(!(i !== k && j === h))
console.log(!(h === 20 && k !== 25))

console.log("-------------------------------")

//Utiliza el operador terniario
const menorEdad = false
menorEdad ? console.log("Es menor de edad") : console.log("Es mayor de edad")

console.log("-------------------------------")

//Combina operadores aritmeticos, de comparacion y logicos
console.log(!(g === h && k < j || h !== k))
console.log(!(k > g || h !== i && j < g))

