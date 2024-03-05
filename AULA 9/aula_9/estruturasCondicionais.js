var media = 6;

if (media >= 8){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

var semaforo;
if (semaforo == "verde"){
    console.log("Siga");
}else if(semaforo == "amarelo"){
    console.log("Atenção!");
}else{
    console.log("Pare!");
}

var Dia;
if (dia == "Sabado" || dia == "Domingo"){
    console.log("Final de semana");
}else{
    console.log("Dia Útil");
}

var string = "";
var numero = 0;
if (string === numero){
    console.log("As variáveis são iguais");
}else{
    console.log("As variáveis não são iguais");
}

var media2 = 7;
media2 >= 8 ? console.log("Aprovado") : console.log("Reprovado");

var media3 = 5;
switch(media3){
    case 8: 
        console.log("Dentro da média"); 
        break;
    case 9: 
        console.log("Acima da média"); 
        break;
    case 10: 
        console.log("Bem acima da média, parabéns!!"); 
        break;
    default: 
        console.log("Abaixo da média");
}