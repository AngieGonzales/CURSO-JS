// Crea una clase que reciba dos propiedades

class Computador {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    static compararComputador(comp1, comp2){
        if (comp1 === comp2){
            console.log("Los dos equipos son iguales")
        }
        else{
            console.log("Los equipos son diferentes")
        }
    }
    // Añade un metodo a la clase que utilice las propiedades
    descripcion(){
        console.log(`Este computador es marca ${this.marca} y es de modelo ${this.modelo}`)
    }
}
let myComputador = new Computador("dell", "inspiron 15")
myComputador.descripcion()

let computador1 = new Computador("lenovo", "yoga")
let computador2 = new Computador("lenovo", "udjdhu")

console.log(Computador.compararComputador(computador1, computador2))



    