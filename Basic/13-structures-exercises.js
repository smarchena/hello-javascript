/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    let arrayAnimals = ['Perro', 'Gato', 'Pez', 'Vaca', 'Lobo']
    console.log(arrayAnimals)

// 2. Añade dos más. Uno al principio y otro al final
    arrayAnimals.unshift('Loro')
    arrayAnimals.push('Toro')
    console.log(arrayAnimals)

// 3. Elimina el que se encuentra en tercera posición
    arrayAnimals.splice(2, 1)
    console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros
    let libros = new Set(["El imperio final", "Cien años de Soledad", "El alquimista", 'Elantris', 'El principito'])
    console.log(libros)

// 5. Añade dos más. Uno de ellos repetido
    libros.add('La Biblia')
    libros.add('El alquimista')
    console.log(libros)

// 6. Elimina uno concreto a tu elección
    libros.delete('Cien años de Soledad')
    console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
    let calendar = new Map([
        ['1', 'Enero'],
        ['2', 'Febrero'],
        ['3', 'Marzo'],
        ['4', 'Abril'],
        ['5', 'Mayo'],
        ['6', 'Junio'],
        ['7', 'Julio'],
        ['8', 'Agosto'],
        ['9', 'Septiembre'],
        ['10', 'Octubre'],
        ['11', 'Noviembre'],
        ['12', 'Diciembre'],      
    ])
    console.log(calendar)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(calendar.has('5'))
    console.log(calendar.get('5'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    let verano = ['Junio', 'Julio', 'Agosto']
    calendar.set('Verano', verano)
    console.log(calendar)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let newArray = ['Santiago', 'Daniela', 'Shady', 'Levi']
    console.log(newArray)
    let newSet = new Set([newArray])
    console.log(newSet)
    let newMap = new Map([
        ['Set', newSet]    
    ])
    console.log(newMap)