/*Tendencia es hacer todo en funciones
sumar (3,7) lo que esta dentro los parentesis se le llama argumentos */

//Datos de entrada, 2 parámetros
//Diferencia entre función y procedimiento: Procedimiento no devuelve nada la funsión si 
//Se recomienda tener funsiones atomicas o pequeñas
//El punto y coma ";" es opcional  

//Versión 1 tradicional
function sumar(numero1, numero2) {
    return resultado= numero1 + numero2;     
}

const resultado = sumar(3,7);

//Versión 2 (arrow function) lo más utilizado actualmente
//Se puede escribir una función flecha de 3 formas 

//Cuando tengo varias sentencias {} y con retorno explicito escribimos la palabra return
const sumarFecha1 = (numero1,numero2) => {
    //
    //
    return numero1+numero2;
}

//Cuando  retorno implicito -> No escribimos la palabra return 
const sumarFecha2 = (numero1,numero2) => (
    numero1+numero2
)

// Cuando es una sola linea lo podemos resumir
const sumarFecha3 = (numero1,numero2) => numero1+numero2;
