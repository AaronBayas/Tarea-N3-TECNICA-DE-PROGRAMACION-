   
                                                        //--TAREA N3 PARTE #1--//
                                                        //--------------------//
//1. Crea un arreglo con nombres de frutas y muestra cada elemento en la consola.

function mostrarFrutas(ArrayFrutas) {
     for (let i = 0; i < ArrayFrutas.length; i++) {
        ArrayFrutas[i]
        }
    return ArrayFrutas
}
let inicio1=performance.now()
let ArrayFrutas = ["Piña", "Manzana", "Mango", "Fresa"];
let resul= mostrarFrutas(ArrayFrutas);
let fin1=performance.now()
console.log(resul);
console.log("Tiempo de ejecución:",fin1-inicio1);
//2. Declara un arreglo con números y encuentra la suma de todos los elementos.

function sumarNumeros(numerosArray) {
    let suma = 0
    for (let i = 0; i < numerosArray.length; i++) {
        suma += numerosArray[i]
    }
    return suma
}
let inicio2=performance.now()
let numerosArray = [2, 4, 6, 8, 10, 12]
let resp1=sumarNumeros(numerosArray)
let fin2=performance.now()
console.log("La suma de todos los elementos es: "+resp1)
console.log("Tiempo de ejecución:",fin2-inicio2);

//3. Dado un arreglo de strings, concatena todos los elementos para formar una frase.

function unir_Frase(palabras) {
    let frase = "";
    for (let i = 0; i < palabras.length; i++) {
        frase += palabras[i];
        if (i < palabras.length - 1) {
            frase += " "
        }
    }
  return frase
}
let inicio3=performance.now()
let palabrasArray = ["Hola", "a","todos", "soy", "Aaron", "Bayas"];
let resp2=unir_Frase(palabrasArray);
let fin3=performance.now()
console.log(resp2);
console.log("Tiempo de ejecución:",fin3-inicio3);
//4. Crea un arreglo de números y muestra el primer y último elemento.

function mostrarElemento(array) {
    let primerElemento;
    let ultimoElemento;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            primerElemento = array[i];
        }
        if (i === array.length - 1) {
            ultimoElemento = array[i];
        }
    }

    if (typeof primerElemento !== 'undefined' && typeof ultimoElemento !== 'undefined') {
        console.log("Primer elemento:", primerElemento);
        console.log("Último elemento:", ultimoElemento);
    } else {
        console.log("El arreglo está vacío.");
    }
}
let inicio4=performance.now()
let miNuevoArray = [1, 3, 6, 8, 10, 19, 5];
mostrarElemento(miNuevoArray);
let fin4=performance.now()
console.log("Tiempo de ejecución:",fin4-inicio4);

//5. Encuentra el índice de un elemento específico en un arreglo.
function encontrarIndice(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1; 
}
let inicio5=performance.now()
let numArray = [11, 20, 30, 45, 60];
let ElementoBus = 20;
let indice = encontrarIndice(numArray, ElementoBus);
if (indice !== -1) {
    console.log("El elemento "+ElementoBus+" se encuentra en el índice "+indice);
} else {
    console.log("El elemento "+ElementoBus+" no se encuentra en el arreglo.");
}
let fin5=performance.now()
console.log("Tiempo de ejecución:",fin5-inicio5);

//6. Determina la longitud de un arreglo y muestra todos sus elementos al revés.

function mostrarAlReves(arr) {
  let longitud = arr.length;
  console.log("Longitud del arreglo:", longitud);
  console.log("Elementos al revés:");
  let elemen=[]
  for (let i = longitud - 1; i >= 0; i--) {
   elemen.push(arr[i]) 
  }
  return elemen
}
let inicio6=performance.now()
let array1 = [1, 2, 3, 4, 5];
let resp3=mostrarAlReves(array1);
let fin6=performance.now()
console.log(resp3);
console.log("Tiempo de ejecución:",fin6-inicio6);

//7. Usa un bucle for para mostrar todos los elementos de un arreglo de días de la semana.

function Mostrardiasdesemana(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]
  }
  return arr
}
let inicio7=performance.now()
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let resp4=Mostrardiasdesemana(diasSemana);
let fin7=performance.now()
console.log(resp4);
console.log("Tiempo de ejecución:",fin7-inicio7);

//8. Multiplica cada elemento de un arreglo por 2 y muestra el resultado.

function multiplicarPorDos(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado
}
let inicio8=performance.now()
let numeros = [2, 4, 6, 12, 8];
let resultadoMultiplicado = multiplicarPorDos(numeros);
let fin8=performance.now()
console.log("Arreglo:", numeros);
console.log("Arreglo multiplicado por 2:", resultadoMultiplicado);
console.log("Tiempo de ejecución:",fin8-inicio8);

//9. Suma los elementos de dos arreglos y almacena el resultado en un tercer arreglo.

function sumarArreglos(arr1, arr2) {
    let ArrayVacio = [];
    for (let i = 0; i < arr1.length; i++) {
        ArrayVacio.push(arr1[i] + arr2[i]);
    }
    return ArrayVacio;
}
let inicio9=performance.now()
let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [6, 7, 8, 9, 10];
let resultadoSuma = sumarArreglos(arreglo1, arreglo2);
let fin9=performance.now()
console.log("Arreglo 1:", arreglo1);
console.log("Arreglo 2:", arreglo2);
console.log("La suma:", resultadoSuma);
console.log("Tiempo de ejecución:",fin9-inicio9);

//10. Crea un programa que simule una lista de compras. Puedes agregar, eliminar y mostrar elementos.

function GestionarLista(operaor, producto){
    let listacompra=[]
    switch(operaor){
        case "agregar":
            listacompra.push(producto)
            console.log(producto)
            break
            case "eliminar":
                let inicio=listacompra.indexOf(producto)
                if(inicio !==-1){
                    listacompra.slice(inicio,1)
                    console.log(producto+"ha sido eliminado")
                } else{
                    console.log(producto+"el producto no se encuentra en la lista")
                } break
                case "mostrar":
                    if(listacompra.length === 0){
                        console.log("la lista de compras esta vacia")
                    } else{
                        listacompra.forEach(function(element,inicio){
                            console.log("la lista de compras")
                            console.log(inicio+1,element)
                        }) 
                    }break
                    default:
                        console.log("operador invalido")

    }
}
let inicio10=performance.now()
GestionarLista("agregar","manzana","pera")
GestionarLista("eliminar","manzana")
GestionarLista("mostrar")
let fin10=performance.now()
console.log("Tiempo de ejecución:",fin10-inicio10)

//11. Implementa una función que encuentre el elemento máximo en un arreglo numérico.

function ElementoMaximo(arreglo) {
    if (arreglo.length === 0) {
      return "El arreglo está vacío.";
    }
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}
let inicio11=performance.now()
let n1 = [8, 2, 18, 21, 11];
let maximoEncontrado = ElementoMaximo(n1);
let fin11=performance.now()
console.log("El Arreglo:", n1);
console.log("Elemento máximo:", maximoEncontrado);
console.log("Tiempo de ejecución:",fin11-inicio11);

//12. Crea un arreglo con nombres de ciudades y muestra cada elemento en la consola.

function ElementoCiudades(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]
  }
  return arr
}
let inicio12=performance.now()
let ciudades = ["Bogota", "Quito", "Guayaquil", "Miami", "Madrid"];
let fin12=performance.now()
let resp6=ElementoCiudades(ciudades);
console.log(resp6);
console.log("Tiempo de ejecución:",fin12-inicio12);

//13. Declara un arreglo con números y calcula el producto de todos los elementos.

function CalculateProducto(arr) {
  if (arr.length === 0) {
    return "El arreglo está vacío.";
  }
  let producto = 1;

  for (let i = 0; i < arr.length; i++) {
    producto *= arr[i];
  }

  return producto;
}
let inicio13=performance.now()
let numbersd = [2, 4, 5, 7, 9];
let resultadoProducto = CalculateProducto(numbersd);
let fin13=performance.now()
console.log("Arreglo:", numbersd);
console.log("Producto de los elementos:", resultadoProducto);
console.log("Tiempo de ejecución:",fin13-inicio13);

//14. Dado un arreglo de strings, crea un nuevo arreglo con la longitud de cada palabra.

function calcularLongitudes(arr) {
    let longitudes = [];
    for (let i = 0; i < arr.length; i++) {
        longitudes.push(arr[i].length);
    }
    return longitudes;
}
let inicio14=performance.now()
let palabra = ["Carro","moto","bicicleta","television"];
console.log("Arreglo de palabras:", palabra);
let longitudesPalabras = calcularLongitudes(palabra);
let fin14=performance.now()
console.log("Longitudes de las palabras:", longitudesPalabras);
console.log("Tiempo de ejecución:",fin14-inicio14);

//15. Crea un arreglo de números y muestra el segundo y tercer elemento.

function Mostrarelement(numerosArr){
    if (numerosArr.length >= 3) {
        let segundoElemento = numerosArr[1];
        let tercerElemento = numerosArr[2];
        console.log("Segundo elemento:", segundoElemento);
        console.log("Tercer elemento:", tercerElemento);
    } else {
        console.log("El arreglo no tiene suficientes elementos.");
    }
}
let inicio15=performance.now()
let numerosArr = [20, 23, 90, 10, 70];
Mostrarelement(numerosArr)
let fin15=performance.now()
console.log("Tiempo de ejecución:",fin15-inicio15);

//16. Encuentra el índice del elemento más grande en un arreglo numérico.

function IndiceMaximo(array) {
    let indiceMaximo = 0;
    if (array.length === 0) {
      return "El arreglo está vacío.";
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaximo]) {
            indiceMaximo = i;
        }
    }
    return indiceMaximo;
}
let inicio16=performance.now()
  let numeros7 = [15, 12, 38, 1, 10];
  let indiceMaximo = IndiceMaximo(numeros7);
  let fin16=performance.now()
  console.log("Arreglo de números:", numeros7);
  console.log("Índice del elemento más grande:", indiceMaximo);
  console.log("Tiempo de ejecución:",fin16-inicio16);

//17. Invierte un arreglo sin usar el método reverse().

function invertirAray(arr) {
    const longitud = arr.length;
    const mitad = Math.floor(longitud / 2);
    for (let i = 0; i < mitad; i++) {
        let temp = arr[i];
        arr[i] = arr[longitud - 1 - i];
        arr[longitud - 1 - i] = temp;
    }
    return arr;
  }
  let inicio17=performance.now()
  let numeros5 = [12, 24, 16, 8, 11];
  let resp8=invertirAray(numeros5);
  let fin17=performance.now()
  console.log("Arreglo después de multiplicar por índice:", resp8);
  console.log("Tiempo de ejecución:",fin17-inicio17);

  //18. Usa un bucle for para multiplicar cada elemento de un arreglo por su índice.

function multiplicarPorIndice(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] *= i;
    }
    return arr
  }
  let inicio18=performance.now()
  let numeros4 = [2, 4, 6, 8, 10];
  let resp9=multiplicarPorIndice(numeros4);
  let fin18=performance.now()
  console.log("Arreglo después de multiplicar por índice:", resp9);
  console.log("Tiempo de ejecución:",fin18-inicio18);
  
  //19. Suma los elementos de un arreglo y muestra la suma parcial en cada iteración.
  function sumaParcialArreglo(arr) {
    let sumaParcial = 0;

    for (let i = 0; i < arr.length; i++) {
        sumaParcial += arr[i];
        console.log(`Iteración ${i + 1}: Suma parcial = ${sumaParcial}`);
    }

    return sumaParcial;
}
let inicio19=performance.now()
let miArreglo = [2, 4, 6, 8, 10];
let sumaTotal = sumaParcialArreglo(miArreglo);
let fin19=performance.now()
console.log("El arreglo:", miArreglo);
console.log("Suma total:", sumaTotal);
console.log("Tiempo de ejecución:",fin19-inicio19);

//20. Encuentra la media de un arreglo de números usando un bucle for.

function calMedia(arr) {
    let suma = 0;
    if (arr.length === 0) {
      return "El arreglo está vacío.";
    }
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    let media = suma / arr.length;
    return media;
  }
  let inicio20=performance.now()
  let arre = [5, 10, 20, 30, 40];
  let media = calMedia(arre);
  let fin20=performance.now()
  console.log("El Arreglo:", arre);
  console.log("La media:", media);
  console.log("Tiempo de ejecución:",fin20-inicio20);
  
  //21. Crea un programa que elimine los elementos duplicados de un arreglo.
function EliminarDuplicado(arreglo){
    let arrsinduplicado=[]
    for(let i=0; i<arreglo.length;i++){
        let elemento=arreglo[i]
        if(arrsinduplicado.indexOf(elemento)=== -1){
            arrsinduplicado.push(elemento)
        }
    }
    return arrsinduplicado
}
let inicio21=performance.now()
let arryDuplicado=[1,2,3,3,4,5,6,6,6]
let arreglosindupli=EliminarDuplicado(arryDuplicado)
let fin21=performance.now()
console.log("El Arreglo:", arryDuplicado);
console.log("El arreglo sin duplicado",arreglosindupli)
console.log("Tiempo de ejecución:",fin21-inicio21)

//22. Dado un arreglo de edades, filtra las edades mayores de 18.

function filtrarEdadesMayoresDe18(edadesArr) {
    let mayoresDeEdad = [];
    for (let i = 0; i<edadesArr.length; i++) {
        let edad = edadesArr[i];
        if (edad >18) {
            mayoresDeEdad.push(edad);
        }
    }
    return mayoresDeEdad;
}
let inicio22=performance.now()
let edadess = [11, 19, 17, 20, 61, 28, 23];
let edadesMayoresDe18 = filtrarEdadesMayoresDe18(edadess);
let fin22=performance.now()
console.log("Arreglo de edades:", edadess);
console.log("Edades mayores de 18:", edadesMayoresDe18);
console.log("Tiempo de ejecución:",fin22-inicio22)