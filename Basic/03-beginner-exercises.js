/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
    // ESTE ES UN COMENTARIO DE UNA LÍNEA. 

// 2. Escribe un comentario en varias líneas
    /* ESTE ES
    UN COMENTARIO 
    DE VARIAS
    LÍNEAS */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let myName = "Santiago"
    let isStudent = true
    let age = 27
    let undefined 
    let nullData = null
    let firstSymbol = Symbol('Hola')
    let firstBigNumber = BigInt(931415978978798789798789767857654352256476578689799786765746432536475767868) 

// 4. Imprime por consola el valor de todas las variables
    console.log(myName)
    console.log(isStudent)
    console.log(age)
    console.log(undefined)
    console.log(nullData)
    console.log(firstSymbol)
    console.log(firstBigNumber)
// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof myName)
    console.log(typeof isStudent)
    console.log(typeof age)
    console.log(typeof undefined)
    console.log(typeof nullData)
    console.log(typeof firstSymbol)
    console.log(typeof firstBigNumber)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    myName = 'Felipe'
    isStudent = false
    age = 23
    undefined = 'defined'
    nullData = 0
    firstSymbol = Symbol('Chau')
    firstBigNumber = BigInt(3232323232323232323232323232323232323232323232323232)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    myName = 28
    isStudent = 'Marchena'
    age = false

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const myName2 = "Santiago"
    const isStudent2 = true
    const age2 = 27
    // const Undefined2
    const nullData2 = null
    const firstSymbol2 = Symbol('Hola')
    const firstBigNumber2 = BigInt(931415978978798789798789767857654352256476578689799786765746432536475767868)     

// 9. A continuación, modifica los valores de las constantes
    // myName2 = "Marchena"
    // isStudent2 = false
    // age2 = 28
    // Undefined2 = 'yes'
    // nullData2 = 4
    // firstSymbol2 = Symbol('Hola2')
    // firstBigNumber2 = BigInt(9314159789787987897987897678576543522564765786897997867657464325364757678688888) 

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse