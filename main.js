//1)
// function verificarParImpar(numero) {
//   if (numero % 2 === 0) {
//     console.log("El número es par.");
//   } else {
//     console.log("El número es impar.");
//   }
// }

// verificarParImpar(4);
// verificarParImpar(7);

//2)
// function compararNumeros(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} es mayor que ${num2}`);
//   } else if (num2 > num1) {
//     console.log(`${num2} es mayor que ${num1}`);
//   } else {
//     console.log("Ambos números son iguales");
//   }
// }

// compararNumeros(5, 8);
// compararNumeros(10, 5);
// compararNumeros(7, 7);

//3)
// function esMultiploDeCinco(numero) {
//   if (numero % 5 === 0) {
//     console.log(numero + " es múltiplo de 5");
//   } else {
//     console.log(numero + " no es múltiplo de 5");
//   }
// }

// esMultiploDeCinco(10);
// esMultiploDeCinco(7);
// esMultiploDeCinco(0);

//4)
// function imprimirNumerosHasta(numero) {
//   for (let i = 0; i <= numero; i++) {
//     console.log(i);
//   }
// }

// imprimirNumerosHasta(10);

//5)
// function imprimirPalabra(palabra, numero) {
//   for (let i = 0; i < numero; i++) {
//     console.log(palabra);
//   }
// }

// imprimirPalabra("Hola", 3);
//6)
// function imprimirArray(array) {
//   if (!Array.isArray(array)) {
//     console.error("El parámetro no es un array.");
//     return;
//   }

//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// const miArray = [1, 2, 3, 4, 5];
// imprimirArray(miArray);

//7)
// function imprimirArraySinQuintoElemento(array) {
//   if (array.length >= 5) {
//     for (let i = 0; i < array.length; i++) {
//       if (i !== 4) {
//         console.log(array[i]);
//       }
//     }
//   } else {
//     console.log("El array debe tener al menos 5 elementos.");
//   }
// }

// const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// imprimirArraySinQuintoElemento(miArray);

//8)
// function multiplicarPorParametro(array, numero) {
//   for (let i = 0; i < array.length; i++) {
//     const resultado = array[i] * numero;
//     console.log(resultado);
//   }
// }

// // Ejemplo de uso:
// const numeros = [1, 2, 3, 4, 5];
// const numeroParametro = 3;

// multiplicarPorParametro(numeros, numeroParametro);
