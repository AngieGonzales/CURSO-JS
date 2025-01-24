// Excepciones

/*let myObject 
     console.log(myObject.email)   // Procude un error
*/

//CAPTURA DE ERRORES

//Try-cacth

let object 

try{
    console.log(object.email)
    console.log("Finaliza la ejecucion sin errores")
}catch(error){
    console.log("Se ha producido un error:", error.message)
}finally{
    console.log("Este codigo se ejecuta siempre")
}

// LANZAMIENTO DE ERRORES

