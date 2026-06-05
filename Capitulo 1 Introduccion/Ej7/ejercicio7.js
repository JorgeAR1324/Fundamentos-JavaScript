//Condicional if else

let nombre, edad;
nombre = prompt("Ingresa tu nombre:");
edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >=18) {
    document.write("Felicidades ", nombre," eres mayor de edad ya que tienes ", edad, " años")
    console.log("Felicidades ", nombre," eres mayor de edad ya que tienes ", edad, " años")
} else {
    document.write("Lo siento ", nombre," eres menor de edad ya que tienes ", edad, " años")
    console.log("Lo siento ", nombre," eres menor de edad ya que tienes ", edad, " años")
}