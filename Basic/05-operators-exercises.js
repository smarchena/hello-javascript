/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let a = 1
    let b = 2

    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log("\ ")

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let valor = 3
    
    valor += a
    console.log(valor)
    valor -= b
    console.log(valor)
    valor *= a
    console.log(valor)
    valor /= b
    console.log(valor)
    console.log("\ ")

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(b>a)
    console.log(a<b)
    console.log(a!=b)
    console.log(a<=b)
    console.log(b>=a)
    console.log("\ ")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(a>b)
    console.log(b<a)
    console.log(b==a)
    console.log(b<=a)
    console.log(a>=b)
    console.log("\ ")

// 5. Utiliza el operador lógico and
    console.log(b>a && a<b)

// 6. Utiliza el operador lógico or
    console.log(b>a || a>b)

// 7. Combina ambos operadores lógicos
    console.log(b>a && a<b || a>b)

// 8. Añade alguna negación
    console.log(!(b>a && a<b || a>b))
    console.log("\ ")

// 9. Utiliza el operador ternario
    let calor = true
    calor ? console.log("Es verano") : console.log("Es invierno")

// 10. Combina operadores aritméticos, de comparáción y lógicas
    let suma = a+b
    let resta = a-b
    let multi = a*b
    let divi = a/b

    console.log(multi>suma)
    console.log(resta<divi)

    console.log(multi>suma && resta<divi)
    console.log(multi>suma || resta<divi)