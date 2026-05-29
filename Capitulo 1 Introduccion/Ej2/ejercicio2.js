/*
var se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.
let se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.
const se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.

*/
var nombre; //declarar variable
nombre = "Juan" //asignar

var apellido = "Perez" //declarar y asignar (mala practica en JS)

var apellido = "Ramirez"// se reasigna

console.log(nombre, " ", apellido)

let edad = 30
console.log (edad)
// let edad = 31
// console.log (edad) //--> Da error, no se puede redeclarar un let
edad = 31
console.log(edad) // Si se puede reasignar un valor

const cc = 1113630955
console.log(cc)
// const cc = 1107851919
// cc = 1107851919
console.log(cc)
