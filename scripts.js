//numeros random
function GenerateRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}

//enlistar numeros random
function ListRandom(list) {
    list = [3]
    for (i = 0; i < 3; i++) {
        list[i] = (GenerateRandom(0, 9));
    }

    return list;
}

//conversion a palabras
var arrayTxt1 = [
    "Sí tienes problemas en casa, ",
    "Sí necesitas ayuda con tus pensamientos pesados, ",
    "Sí piensas que esta mal sentirse mal, ",
    "Sí no quieres hablar con otra persona sobre tus sentimientos, ",
    "Sí te sientes solo, ",
    "Sí no quieres ser un 'problema', ",
    "Sí te sientes confundido, ",
    "Sí quieres llorar, ",
    "Sí no tienes una enorme cantidad de amigos, ",
    "Sí sientes que otros te juzgan en secreto, "
]
var arrayTxt2 = [
    "eso significa que eres una persona normal, no te preocupes por eso, ",
    "eso significa que tal vez no estas en tus mejores dias, no te sientas mal solo por eso, ",
    "eso significa que necesitas un poco de ayuda, eso es normal para cualquiera, ",
    "eso significa que tienes un poco de trabajo personal, tomate tu tiempo, ",
    "eso significa que necesitas respirar y descansar, tomate tu tiempo, ",
    "eso significa que no debes dejar de tener esperanza, no te rindas, ",
    "eso significa que debes pensar en tu futuro, no te agobies, ",
    "eso significa que necesitas liberar ese peso, no te sobrecargues, ",
    "eso significa que debes buscar un poco de ayuda, esta bien no estar bien, ",
    "eso significa que pensar quiza por un momento antes de actuar, piensa las cosas bien, "
]
var arrayTxt3 = [
    "deberias intentar hacer algo al respecto.",
    "deberias pensar en quien pueda ayudarte, esta bien necesitar ayuda.",
    "deberias calmarte y pensar en paz.",
    "deberias ayudarte un poco buscando ayuda.",
    "deberias dejar un poco el orgullo.",
    "deberias medir un poco tus acciones, ten cuidado.",
    "deberias dejar de reprimirte una y otra vez.",
    "deberias darte un tiempo de reposo solo para ti.",
    "deberias hablar sobre lo que te pasa, esta bien.",
    "deberias ser tú, y no sentirte mal por eso.",
]

// cortinas
function prendercortina() {
    var cortina = document.getElementById("cortina");
    cortina.classList.add("active")
    setTimeout(() => {
        cortina.classList.remove("active")
        var elemento = document.getElementById("mydiv");
        elemento.style.display = "block";
    }, 2000);
}

// boton de start
let Lista = [3];
let returned;

document.getElementById("random").onclick = () => {
    returned = (ListRandom(Lista));




    var comp1 = returned[0]
    var comp2 = returned[1]
    var comp3 = returned[2]

    prendercortina();

    var elemento = document.getElementById("mydiv");
    elemento.style.display = "none";

    setTimeout(() => {

        document.getElementById("mydiv").innerHTML = arrayTxt1[comp1] + arrayTxt2[comp2] + arrayTxt3[comp3]

    }, 2000);



    document.getElementById("mydiv").innerHTML = " "

};

