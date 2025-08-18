/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let myName = "Santiago"

    if(myName== "Santiago"){
        console.log(myName)
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let user = "one"
    let password = 1234

    if(user == "one" && password == 1234){
        console.log("¡Bienvenido a su sesión!")
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let number = 3

    if(number > 0){
        console.log("El número es positivo")
    }else if(number < 0){
        console.log("El número es negativo")
    }else{
        console.log("El numero es cero")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    let edadPersona = 18
    let edadVoto = 18
    let restante

    if(edadPersona < 18){
        restante = edadVoto - edadPersona
        console.log(`Es menor de edad, puede votar en ${restante} año(s).`)    
    }else{
        console.log("Es mayor de edad, puede votar.")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    let edad = 17

    edad>=18 ? console.log("Adulto") : console.log("Menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    let mes = 11

    if(mes>1 && mes<=3){
        console.log("La estación del año es Primavera.")
    }else if(mes>3 && mes<=6){
        console.log("La estación del año es Verano.")
    }else if(mes>6 && mes<=9){
        console.log("La estación del año es Otoño.")
    }else if(mes>9 && mes<=12){
        console.log("La estación del año es Invierno.")
    }else{
        console.log("Mes del año incorrecto.")
    }  

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    if(mes == 1,3,5,7,8,10,12){
        console.log("El mes tiene 31 días.")
    }else if(mes == 4,6,9,11){
        console.log("El mes tiene 30 días")
    }else if(mes == 2){
        console.log("El mes tiene 28 días (29 en años bisiestos)")
    }else{
        console.log("Mes del año incorrecto.")
    }
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idiomas = ("español", "ingles", "portugues", "frances")
    let mensaje
    let idioma = "español"

    switch(idioma){
        case "español":
            mensaje = "¡Hola! saludos cordiales, ¡bienvenido!"
            break
        case "ingles":
            mensaje = "Hi! best regards! Welcome!"
            break
        case "portugues":
            mensaje = "Olá! Atenciosamente, seja bem-vindo!" 
            break
        case "frances":
            mensaje = "Bonjour! Cordialement, bienvenue !"
            break
        default:
            mensaje = "No es un idioma de la lista"        
    }
    console.log(mensaje)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
    let mes1 = 12
    let estacion

    switch(mes1){
        case 1:
            estacion = "Primavera" 
            break
        case 2:
            estacion = "Primavera" 
            break
        case 3:
            estacion = "Primavera" 
            break
        case 4: 
            estacion = "Verano"
            break
        case 5: 
            estacion = "Verano"
            break
        case 6: 
            estacion = "Verano"
            break
        case 7:
            estacion = "Otoño"
            break
        case 8:
            estacion = "Otoño"
            break
        case 9:
            estacion = "Otoño"
            break
        case 10:
            estacion = "Invierno"
            break
        case 11:
            estacion = "Invierno"
            break
        case 12:
            estacion = "Invierno"
            break
        default:
            estacion = "Mes incorrecto"
    }  
    console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
    
    let dias

    switch(mes1){
        case 1:
            dias = "Enero tiene 31 días" 
            break
        case 2:
            dias = "Febrero tiene 28 días (29 en años bisiestos)" 
            break
        case 3:
            dias = "Marzo tiene 31 días" 
            break
        case 4: 
            dias = "Abril tiene 30 días"
            break
        case 5: 
            dias = "Mayo tiene 31 días"
            break
        case 6: 
            dias = "Junio tiene 30 días"
            break
        case 7:
            dias = "Julio tiene 31 días"
            break
        case 8:
            dias = "Agosto tiene 31 días"
            break
        case 9:
            dias = "Septiembre tiene 30 días"
            break
        case 10:
            dias = "Octubre tiene 31 días"
            break
        case 11:
            dias = "Noviembre tiene 30 días"
            break
        case 12:
            dias = "Diciembre tiene 31 días"
            break
        default:
            dias = "Mes incorrecto"
    }  
    console.log(dias)