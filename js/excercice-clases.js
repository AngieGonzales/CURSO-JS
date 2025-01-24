// Crea una clase que reciba dos propiedades

/*class Computador {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    static compararComputador(comp1, comp2){
        if (comp1 === comp2){
            return"Los dos equipos son iguales"
        }
        else{
            return"Los equipos son diferentes"
        }
    }
    // Añade un metodo a la clase que utilice las propiedades
    descripcion(){
        console.log(`Este computador es marca ${this.marca} y es de modelo ${this.modelo}`)
    }
}
let computador1 = new Computador("lenovo", "yoga")
let computador2 = new Computador("lenovo", "udjdhu")

computador1.descripcion()
console.log(computador1.modelo)

console.log(Computador.compararComputador(computador1, computador2))

// Crea una clase que haga uso de herencia

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    caminar(){
        console.log(`${this.nombre} camina`)
    }
}
class Estudiante extends Persona {
    constructor(nombre, apellido, grado){
        super(nombre, apellido)
        this.grado = grado
    }
    correr(){
        console.log(`El estudiante ${this.nombre} puede correr`)
    }
}
let myEstudiante = new Estudiante("david", "amado", "undecimo")
console.log(myEstudiante)
myEstudiante.correr()
myEstudiante.caminar()

let myPersona = new Persona("patricio", "sanchez")
console.log(myPersona)
myPersona.caminar()*/

// Crea una clase que haga uso de getter y setter

class Usuario {

    #nombre
    #edad
    #cedula
    #claveBanco
    constructor(nombre, edad, cedula, claveBanco){
        this.#nombre = nombre 
        this.#edad =edad 
        this.#cedula = cedula 
        this.#claveBanco = claveBanco
    }
    get cedula (){
        return this.#cedula
    }
    get claveBanco (){
        return this.#claveBanco
    }
    set claveBanco(nuevaClave){   // Modificar el valor de la propiedad
        this.#claveBanco = nuevaClave
    }
}
let usuario2 = new Usuario("juan", "34", "1096780987", "HGF1673")
console.log(usuario2.nombre)  //Debe mostrar undefined porque la propiedad es privada
console.log(usuario2.cedula)

usuario2.claveBanco = "new ASD26736"
console.log(usuario2.claveBanco)

    