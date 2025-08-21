/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for ( let i = 0; i <= 20; i++){
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let j = 1;
    let sum = 0
    while(j <= 100){
        sum = sum + j
        j++
    }
    console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    for(let k =1; k <= 50; k++){
        if(k % 2 == 0){
            console.log(k)
        }
    }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    let nombres = ['Santiago', 'Daniela', 'Shady', 'Levi', 'Pinky']

    for (let value of nombres){
        console.log(value)
    }

    for(let x = 0; x <= nombres.length; x++){
        console.log(nombres[x])
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10