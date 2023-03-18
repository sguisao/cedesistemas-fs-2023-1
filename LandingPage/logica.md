# ************************** Ejercicio 2 ************************** #
# Escribir un seudocódigo que permita recibir 2 números e imprima la suma de ambos 
Inicio
### def de variables
    suma,numero1, numero2

### Datos de entrada 
    imprima "Ingrese número 1 y número 2"
    Lea (numero1, numero2)

### Proceso
    suma = numero1 + numero2

### Resultados
    imprima "La suma es", suma
Fin


# ************************** Ejercicio 3 ************************** #
# Escribir un seudocódigo que calcule la edad de una persona con su año de nacimiento

Inicio
### def de variables
   edad,fecha_actual ,fecha_nacimiento

### Datos de entrada 
    imprima "Ingrese la fecha actual"
    Lea (fecha_actual)
    imprima "Ingrese su fecha de nacimiento"
    Lea (fecha_nacimiento)

### Proceso
    edad = fecha_actual - fecha_nacimiento

### Resultados
    imprima "Tu edad es:", edad
Fin

# ************************** Ejercicio 4 ************************** #

# Escribir un seudocódigo que permita calcular el promedio de 5 notas de un estudiante de ingeniería 

Inicio
### def de variables
    suma,promedio,nota1,nota2,nota3,nota4,nota5

### Datos de entrada 
   imprima "Ingresa tus cinco notas:"
    Lea (nota1)
    Lea (nota2)
    Lea (nota3)
    Lea (nota4)
    Lea (nota5)
    
### Proceso
   suma = nota1 + nota2 + nota3 + nota4 + nota5
   promedio = suma / 5

### Resultados
   imprima "Tu promedio es:", promedio
Fin

# ************************** Ejercicio 5 ************************** #
# Escribir un seudocódigo que muestre la suma de los primeros 10 números impares

Inicio
### def de variables
    suma_impares,contador=1

### Datos de entrada 
    imprima "Ingresa numero impares:"
       
### Proceso
    Mientras contador <= 10 hacer
      si contador mod 2 != 0 entonces
         suma_impares = suma_impares + contador
      fin si
      contador = contador + 1
    Fin mientras
### Resultados
   imprima "La suma de los primeros 10 números impares es:", suma_impares
Fin