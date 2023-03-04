alert("Bem-Vindo a está página!");

function jmpLine() {
    document.write("<br>");
}

function showText(text) {
    document.write(text)
    jmpLine();
}

var currentYear = 2023
var nameFlavio = "Flávio";

showText("João tem " + (currentYear - 1977) + " anos.")
showText(nameFlavio + " tem " + (currentYear - 1980) + " anos.")
showText("Paulo tem " + (currentYear - 1981) + " anos.")

var ageJoao = 46;
var ageRobson = 43;
var agePaulo = 42;

var avg = (ageJoao + agePaulo + ageJoao)/3

showText('A média das idades é ' + Math.round(avg))

