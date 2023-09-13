//numeros random

function GenerateRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);

}

//enlistar numeros random


let list = [3]

for (i = 0; i < 3; i++) {
    list[i] = (GenerateRandom(1, 10));

}

console.log(list)


//convertir numeros random a frases 
