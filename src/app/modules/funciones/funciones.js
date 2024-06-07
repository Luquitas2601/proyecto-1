//funcion de estructura basica,con parametros y sirve para sumar

function sumar(a, b) {
    let resultado = a + b
    return resultado;//el return es lo que devuelve la funcion
}

function sumar2() {
    let a = parseInt(prompt("ingrese el primer numero"))
    let b = parseInt(prompt("ingrese el segundo numero"))
    alert("la suma es " + (a + b))
}

function saludo() {
    let nombre = prompt("ingrese su nombre")
    let apellido = prompt("ingrese su apellido")
    return ("buenos dias " + nombre + " " + apellido)
}
function saludo2(apellido, nombre) {
    return "¡buenos dias, " + nombre + " " + apellido + " !"
}
function rectangulo(base, altura) {
    return base * altura
}

function rectangulo2() {
    let base = parseInt(prompt("ingrese la base del rectangulo"))
    let altura = parseInt(prompt("ingrese la altura de la base"))
    alert("La altura del rectangulo es: " + (base * altura))
}
/*funcion anonima o expresada
let greet=function(name){
    console.log(`hello ${name}`);

}
greet("sai")
//hello sai
*/
//cuadrado de un numero:define una funcion anonima que tome un numero como parametro y devuelva su cuadrado.
//calculadora basica:crea una funcion anonima que tome 2 numeros y una operacion(suma,resta,multiplicacion,division) como parametros y devuelva el resultado de la operacion
let numero = function (num) {
    console.log(`el cuadrado del numero es ${num * num}`)
}
let numero2 = function () {
    let num = (parseInt(prompt("ingrese un numero")))
    console.log(`el cuadrado del numero es ${num * num}`)
}
let calculadora = function () {
    let num1 = parseInt(prompt("ingrese el primer numero"))
    let num2 = parseInt(prompt("ingrese el segundo numero"))
    let opcion = parseInt(prompt("ingrese la operacion que desea realizar 1)suma 2)resta 3)multiplicacion 4)division"))
    while (isNaN(num1) || isNaN(num2)) {
        num1 = +prompt("ingrese numero 1")
        num2 = +prompt("ingrese numero 2")
    }
    switch (opcion) {
        case 1:
            return ("la suma es" + num1 + num2)
        case 2:
            return ("la resta es" + num1 - num2)
        case 3:
            return ("la multiplicacion es " + num1 * num2)
        case 4:
            if (num2 === 0) {
                return "Error"
            }
            return ("la division es " + num1 % num2)
        default: "opcion incorrecta"
            break;
    }

}

let calculadora2 = function (a, b) {

    let opcion = parseInt(prompt("ingrese la operacion que desea realizar 1)suma 2)resta 3)multiplicacion 4)division"))
    while (isNaN(a) || isNaN(b)) {
        a = +prompt("ingrese numero 1")
        b = +prompt("ingrese numero 2")
    }

    switch (opcion) {
        case 1:
            return a + b
        case 2:
            return a - b
        case 3:
            return a * b
        case 4:
            if (b === 0) {
                return console.log("error")
            }
            return a / b

        default: "opcion incorrecta"
    }

}


