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

var arrayData = new Array();
var archivoTxt= new XMLHttpRequest();
var fileRuta =  'frasenew.txt';
archivoTxt.open("GET",fileRuta,false);
archivoTxt.send(null);
var Txt = archivoTxt.responseText;
for (var i = 0; i < Txt.length; i++){
    arrayData.push(Txt[i])
}
arrayData.forEach(function(data){
    console.log(data);
});
