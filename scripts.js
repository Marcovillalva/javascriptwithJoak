// EJECICIO1
    // me piden gestar sistema de conducir:
    // -si es mayoer de edad puede conducir
    // -si no es mayor no puede conducir
//RESPUESTA
    // let edad = prompt("intorduce tu edad")
    // if (edad >= 18) {
    //     alert("keep going")
    // } else {
    //     alert("no enough age")
    // }

// EJERCICIO2
    // Pedir nota. 
    // si esta nota es entre 0 y 3 = es deficienta
    // si la nota es entre 3 y 5 = insuficienta
    // si la nota entre es 6 y 7 = esta bien
    // entre 7 y 9 = notable
    // entre 9 y 10 = sobresaliente 
//RESPUESTA
    // let nota = prompt ("introduce la nota")
    // if (nota <= 3) {
    //     alert("deficiente")
    // } else if (nota <= 5) {
    //     alert("insuficiente")
    // } else if (nota <= 7) {
    //     alert("bien")
    // } else if(nota <= 9) {
    //     alert("notable")
    // } else if (nota == 10) {
    //     alert("sobresaliente")
    // }
//EJERCICIO3
    // Sistema preguntas. 
    // affirmativo va a carcel
    // negativo se va a su casa
//RESPUESTA
    // let question=prompt("Fuiste tu quién escribió... SudoKillAll")
    // var Verdadera = "si";
    // var Negativo = "no";
    
    // if (question == Verdadera) {
    //     alert("Te vas a la carcel por culei")
    // } else if (question == Negativo) {
    //     alert("te salvaste de la carcel") 
    // }

// EJERCICIO4
    // Escribe sistema para comprar helados
    // helado cuesta 2 pesos
    // helado + mammut = 4
    // helado + kit-kat = 5
    // helado + oreo = 7
    // helado + 0 = 2
    // si no existe mostrar preguntas de nuevo
//RESPUESTA
    // let helado = prompt ("Con qué top quieres tu helado: mammut, kit-kat, oreo, sin top")
    // let sin = "sin top";
    // let oreo = "oreo";
    // let kitkat = "kit kat";
    // let mammut = "mammut";

    // if (helado == sin) {
    //     alert ("$2 pesos")
    // } else if (helado == oreo) {
    //     alert ("$7 pesos")
    // } else if (helado == kitkat) {
    //     alert ("$5 pesos")
    // } else if (helado == mammut) {
    //     alert ("$4 pesos")
    // }

    
    // // EJERCICIO5 
    // var i=0
    // var number=0
    // for (var i=0; i<10; i++) {
    //     number = number + 4
    //     document.write(number)
    //     console.log(number)
    // }

    //PIRAMIDE
    //RESPUESTA
    // var i=0
    // var char = "*"
    // var base = 30
    // var line = ""
    
    // for (var i=0;  i < 30; i++) 
    // {
    //     line += char 
    //     console.log(line)
    // }
   


//  SWITCH no funcionó

// var frutas = ["pera, naranja, manzana"];
// prompt ("¿cuánto cuesta el kilo de? pera, manzana o naranja")

// switch (frutas){
//     case 'pera':
//         console.log ('el kilo de peras cuesta $5 pesos')
//         [break;]
//     case 'manzana':
// }


// EJERCICIO 6
// var pregunta = prompt ("¿Qué palabra quieres traducir?")
// if(pregunta=="manzana"){
//     document.write('apple')
// }else if (pregunta=="durazno"){
//     document.write('peach')
// }else if (pregunta == "pera"){
//     document.write('pear')
// }else if (pregunta == 'fresa') {
//     document.write('strawberry')
// } else {
//     document.write('no existe esa traduccion')
// }

var pregunta = prompt ("que palabra quieres traducir")
switch (pregunta) {
    case "manzana": document.write('apple')
    break;
    case "pera": document.write('pear')
    break;
    case "fresa": document.write('strawberry')
    break;
    case "platano": document.write('bananna')
    break;
    default: document.write('no hay traduccion')
} 