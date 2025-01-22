// Sintaxis

let persona = {
    nombre : "Angie",
    apellido : "Gonzales",
    edad : 19,
}

// ACCESO A PROPIEDADES

// Notacion por punto
console.log(persona.apellido)

// Notacion de corchetes
console.log(persona["nombre"])

// Modificacion

persona.edad = 20
console.log(persona.edad)

// Eliminacion de propiedades

delete persona.apellido
console.log(persona)

// Agregar propiedades

persona.email = "Angie 2005@gmail.com"    // notacion por punto
persona["telefono"] = 3214567678        // notacion de corchete
console.log(persona)

// Metodos (funciones)

let persona2 = {
    name : "kathe",
    lastname : "acuña",
    walk : function (){
        console.log("La persona camina")
    }
}
persona2.walk()

// Anidacion de objetos
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
console.log(persona3)
console.log(persona3.job.name)
persona3.job.work()

// Iteraciones 

for (let name in persona3){
    console.log(name)
}

// Objetos como funciones

