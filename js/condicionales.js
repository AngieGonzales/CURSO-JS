// if, else and else if
let edad = 51

if (edad > 17 && edad < 50) {
    console.log("Eres mayor de edad")
}
else if (edad > 50) {
    console.log("Ya estas viejito")
}
else {
    console.log("Eres menor de edad")
}

// swicth (comparar muchas condiciones contra una misma variable)

let dia = 55
let nombreDia 

switch (dia){
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miercoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sabado"
        break
    case 6:
        nombreDia = "Domingo"
        break
        default:
        nombreDia = "Numero de dia incorrecto"
}
console.log(nombreDia)