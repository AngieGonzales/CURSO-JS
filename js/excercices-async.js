console.log("Inicio")
for (let i = 0; i <= 1000000000; i ++){}  //Codigo bloqueante, el codigo se detiene hasta que la tarea finalice
console.log("fin")

//-------------------------------

console.log("inicio")
setTimeout(() => console.log("Tarea asincronica completada") , 3000) // Codigo no bloqueante, el codigo se ejecuta en un segundo plano
console.log("fin")                                                  // sin interferir con el flujo normal del codigo.

//----------------------------
//Llamar a una API con asincronismo

async function callApi() {
    console.log("Iniciando........")
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
        const datos = await respuesta.json()
        console.log("datos obtenidos", datos.slice(0,3))
        }
        catch(error){
            console.error("Ha ocurrido un error", error)
        }
    console.log("terminado")
}
callApi()

//Mostrar un mensaje de inicio, simular una tarea de 2 segundos y luego mostrar un mensaje de finalización.

console.log("iniciando....")
setTimeout(() => {
    console.log("Tarea terminada despues dos segundos")
}, 2000)
console.log("Terminado")

// Obtener datos de una API pública y mostrarlos en la consola

async function obtenerDatos () {
    console.log("Iniciando....")
    try{
        const datos = await fetch("https://randomuser.me/api")
        const respuesta = await datos.json()
        console.log("Datos obtenidos", respuesta)
    }catch(error){
        console.error("Error: ", error)
    }
    console.log("Terminado")
}

//  

function myPromesa () {
    return new Promise((resolve, reject) => {
        const exito = false

        if (exito){
            resolve("La operacion fue exitosa")
        }else {
            reject("Hubo un error en la operacion")
        }
    })
}

myPromesa()
.then((resultado) => {
    console.log("Resultado: ", resultado) // Se ejecuta si se llama a resolve
})
.catch((error) => {
    console.error("Error", error)
})


function iniciarSesion (usuario, contraseña){
    return new Promise((resolve, reject) =>{
        if (usuario === "admin" && contraseña === 12321){
            resolve("Inicio de sesion exitoso")
        }else {
            reject("Credenciales incorrectas")
        }
    } )
}
iniciarSesion("admin", 12321)
    .then((mensaje) =>{
        console.log(mensaje)
    })
    .catch((error) => {
        console.error(error)
    })

//-----------------------------------------

    function cuentaRegresiva(segundos) {
        return new Promise((resolve) => {
            const intervalo = setInterval(() => {
                console.log(segundos);
                segundos--;
    
                if (segundos < 0) {
                    clearInterval(intervalo);
                    resolve("¡Tiempo completado!");
                }
            }, 1000);
        });
    }
    
    cuentaRegresiva(5).then((mensaje) => console.log(mensaje));  // Consumir la promesa
    
//Crea una función que obtenga datos de una API y maneje errores si la respuesta no es exitosa.

async function tenerDatos() {
    try{
        const respuesta = await fetch("https://randomuser.me/api/")
        if (!respuesta.ok){
            throw new error(`Error en la solicitud: ${respuesta.status}`)
        }
        const data = await respuesta.json()
        console.log("Usuario detenido: ", data.results[0].name.first)

    }catch(error){
        console.error("Error al obtener los datos", error.message)
    }
}
tenerDatos()