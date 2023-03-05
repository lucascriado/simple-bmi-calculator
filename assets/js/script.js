alert("Bem-Vindo a está página!");

function jmpLine () {
    document.write("<br>");
    document.write("<br>");
}

function showText(textIn){
    document.write(textIn)
    jmpLine();
}   

function calcImc(height, weight){
    return weight / ( height * height )
}

var userName = prompt("Informe seu nome.")
var weightUser = prompt(userName + ", informe seu peso.")
var heightUser = prompt(userName + ", informe sua altura.")
var fsImc = calcImc(heightUser, weightUser);

showText( userName + ", o seu IMC calculado é : " + fsImc + ".")
