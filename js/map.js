let myMap = new Map()

console.log(myMap)

myMap = new Map([
    ["nombre", "Angie"],
    ["apellido", "Gonzales"],
    ["edad", 19],
    ["correo", "angie123@gmail.com"]
])
console.log(myMap)

//         clave   valor
myMap.set("alias", "kathe") // Añade elementos al map
myMap.set("nombre", "Katherine") // Toma la clave y modifica el valor

console.log(myMap)

// get (obtiene el valor de la clave que le estamos pasando)

console.log(myMap.get("nombre"))
console.log(myMap.get("correo"))
console.log(myMap.get("telefono"))

// has (pregunta por la clave y devuelve un booleano)

console.log(myMap.has("correo"))
console.log(myMap.has("direccion"))


// delete (elimina elementos del map)

myMap.delete("edad")
myMap.delete("apellido")

console.log(myMap)

myMap.clear()

console.log(myMap)