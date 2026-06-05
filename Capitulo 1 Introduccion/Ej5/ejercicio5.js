// Operadores Matematicos

let a ,b;
let c, d;

let suma, resta, mult, div, residuo, pot;

// Obtener datos de usuario

document.write("<b> Sin parsefloat: <br> </b>")

a = prompt("Ingresa un numero: ")
b = prompt("Ingresa otro numero: ")

// Resultado de las operaciones

suma = a + b; // El + concatena, no suma
document.write("La Suma es: ", suma, "<br>")

resta = a - b
document.write("La Resta es: ", resta, "<br>")

mult = a * b
document.write("La Multiplicación es: ", mult, "<br>")

residuo = a % b
document.write("El Residuo es: ", residuo, "<br>")

pot = a ** b
document.write("La Potencia es: ", pot, "<br>")

//convertir en numeros
document.write("<b> Con parsefloat: <br> </b>")

c = parseInt(prompt("Ingresa otro otro numero: "))
d = parseFloat(prompt("Ingresa otro otro otro numero: "))

suma = c + d; // El + concatena, no suma
document.write("La Suma es: ", suma, "<br>")

resta = c - d
document.write("La Resta es: ", resta, "<br>")

mult = c * d
document.write("La Multiplicación es: ", mult, "<br>")

residuo = c % d
document.write("El Residuo es: ", residuo, "<br>")

pot = c ** d
document.write("La Potencia es: ", pot, "<br>")

console.log("Suma:", suma, "Resta:", resta, "Multiplicación:", mult, "Residuo:", residuo, "Potencia:", pot)