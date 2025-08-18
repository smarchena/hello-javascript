/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
        let texto1 = "Hola!"
        let texto2 = "¿como estás?"
        console.log(texto1 +" " + texto2)

// 2. Muestra la longitud de una cadena de texto
        console.log(texto2.length)

// 3. Muestra el primer y último carácter de un string
        console.log(texto1[0])
        console.log(texto1[4])

// 4. Convierte a mayúsculas y minúsculas un string
        console.log(texto1.toUpperCase())
        console.log(texto2.toLowerCase())
        console.log("\ ")

// 5. Crea una cadena de texto en varias líneas
        let texto3 = `Bienvenido!
        esto es una cadena de texto
        de varias líneas!`

        console.log(texto3)
        console.log("\ ")

// 6. Interpola el valor de una variable en un string
        let nombre = "Santiago"

        console.log(`        ${texto1} ${nombre} ${texto2} ${texto3}`)
        console.log("\ ")

// 7. Reemplaza todos los espacios en blanco de un string por guiones
        let texto = "Hola mundo jeje hola mundo"
        console.log(texto.replaceAll(" ","-"))
        console.log("\ ")

// 8. Comprueba si una cadena de texto contiene una palabra concreta
        console.log(texto3.includes("Santiago"))

// 9. Comprueba si dos strings son iguales
        console.log(texto1 == texto2)

// 10. Comprueba si dos strings tienen la misma longitud
        console.log(texto1.length == texto2.length)