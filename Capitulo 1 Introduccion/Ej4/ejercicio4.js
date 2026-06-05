let nombre, edad, direccion, movil, email; //Declarar varias variables

//Promt: palabra reservada en JS que despliega una funcion y sale un mensaje de tipo alert para el usuario

nombre = prompt("Escriba su nombre:");//Pedir datos al usuario
edad = prompt("Escriba su edad:");
direccion = prompt("Escriba su dirección:");
movil = prompt("Escriba su móvil:");
email = prompt("Escriba su email:");
document.write("Bienvenido ", nombre, "<br>", "Tu edad es: ", edad, "<br>", "Tu dirección es: ", direccion, "<br>", "Tu móvil es: ", movil, "<br>", "Tu email es: ", email, "<br>");