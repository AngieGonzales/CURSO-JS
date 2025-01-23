// Usa desestructuracion para extraer los dos primeros elementos de un array

let colors = ["negro", "blanco", "rosado", "anaranjado", "morado", "azul"]

let [color1, color2,,,,otrosColores] = colors
console.log(color1)  //negro
console.log(color2)  //blanco

// Usa desestructuracion en un array y asigna un valor predeterminado a una variable

let ropa =["camisa", "pantalon", "short", "blusa", "medias"]

let [prenda1, prenda2,,,prenda5, prenda6 = "sudadera"] = ropa
console.log(prenda6)
console.log(prenda1)

// Usa desestructuracion para extraer dos propiedades de un objeto

let casa = {
    color : "blanco",
    direccion : "crr a23 #3-5",
    area : 20,
    precio : 500000000
}
let {color, direccion,...otrosValores} = casa
console.log(otrosValores)

// Usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes

let computador = {
    color3 : "gris",
    marca : "dell",
    ram : "12 gb",
    procesador : "intel core i3"
}
let {color3: colorPc,marca: marcaPc,...otrosComponentes} = computador
console.log(otrosComponentes)
console.log(colorPc)

// Usa desestructuracion para extraer dos propiedades de un objeto anidado

let persona = {
    nombre :"juan",
    apellido : "amado",
    edad : 25,
    telefono : 3223546765,
    trabajo : {
        nombre : "programador",
        horasDia : 8,
        ubicacion : "cabecera"
    }
}

let {trabajo:{nombre, horasDia,...otrosDatos}} = persona
console.log(otrosDatos)

// Usa propagacion para combinar dos arrays en uno nuevo

let marcas = ["puma", "croydon", "verlon", "adidas"]
let articulos = ["zapatos", "sudaderas", "camisas", "medias"]

let newArray = [...marcas, ...articulos]
console.log(newArray)

// Usa propagacion para crear una copia de un array

let ciudades = ["bogota", "bucaramanga", "medellin"]

let cuidades2 = [...ciudades]
console.log(cuidades2)

// Usa propagacion para combinar dos objetos en uno(si voy a combinar objetos no pueden haber dos propiedades con el mismo nombre)

let colegio = {
    nombre : "Roel y velasco",
    salones : 20,
    color : "beight"
}
let alumno = {
    nombreA : "carlos",
    codigo : 1564,
    jornada : "mañana"
}

let nuevObjeto = {...colegio, ...alumno}
console.log(nuevObjeto) 

// Usa propagacion para crear una copia de un objeto

let nuevoColegio = {...colegio}
console.log(nuevoColegio)

// Combina desestructuracion y propagacion

let mesa = {
    numPatas : 4,
    colores : "negra",
    material : "madera",
    precio : 20.000
}
let {numPatas:numeroPatas, colores: coloresMesa,...otrasCaracteristicas} = mesa
console.log(otrasCaracteristicas)

let nuevaMesa = {
    numeroPatas : 6,
    coloresMesa : "gris",
    ...otrasCaracteristicas
}
console.log(nuevaMesa)