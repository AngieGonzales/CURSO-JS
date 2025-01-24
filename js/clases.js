// Crea plantillas de objetos donde asignamos propiedades pero no le asignamos un valor en el momento
// el valor lo asignamos despues

class Persona {
    constructor (nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    speak(){
        console.log("Hola soy", this.nombre)
    }
}

// Sintaxis

let user = new Persona("katherine", "gonzales", 19)
user.speak()
console.log(user)

let user2 = new Persona("marina", "acuña", "medina")
console.log(user2)
console.log(typeof user)

// Valores por defecto

class Persona2 {
    constructor (nombre = "Por defecto", apellido = "por defecto", edad ="0"){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
let persona2 = new Persona2("yohany")
console.log(persona2)

// Acceso a las propiedades

console.log(persona2.nombre)
console.log(persona2["nombre"])

// Funciones en las clases

class PersonaConMetodo {
    constructor (nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
    }
    caminar(){
        console.log(`${this.nombre} esta caminando`)
    }
}
let persona4 = new PersonaConMetodo("camila")
persona4.caminar()

// Propiedades privadas

class PersonaPrivada {

    #banco

    constructor(nombre, banco){
        this.nombre = nombre
        this.#banco = banco
    }
    pagar(){
        console.log(this.#banco)
    }
}
let persona5 = new PersonaPrivada("erick", "PI1786354")
persona5.pagar()

// Getter and Setter

class GetPersona {

    #nombre
    #alias
    #edad
    constructor(nombre, alias, edad){
        this.#nombre = nombre
        this.#alias = alias
        this.#edad = edad
    }
    get nombre() {              //Permite acceder a las propiedades cuando estan privadas desde adentro de la clase
        return this.#nombre
    }
}
let  getPersona2 = new GetPersona("carlos", "carlitos", 45)
console.log(getPersona2.nombre)

// Herencia de clases

class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    sonido(){
        console.log("el animal emite un sonido")
    }
}
class Dog extends Animal {
    run(){
        console.log("el perro corre")
    }
    sonido(){                       // redefinir la funcion del perro para que no siga heredando la general sino que tenga su funcion
        console.log("El perro ladra")// propia, se debe redefinir con el mismo nombre
    }
}


class Fish extends Animal{
    constructor(nombre, tamaño){
        super(nombre)                   //LLama al constructor superior para invocar la propiedad nombre
        this.tamaño = tamaño
    }
    nadar(){
        console.log("el pescado puede nadar")
    }
}
let myDog = new Dog("firulais")
console.log(myDog)
myDog.run()
myDog.sonido()
let myFish = new Fish("nemo", 20)
myFish.nadar()
console.log(myFish)

// Metodos estaticos (lo utilizamos para no crear una instancia)

class OperacionMatematica{
    static suma(a,b){
        return a + b
    }

}
console.log(OperacionMatematica.suma(19, 78))
