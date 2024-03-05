for (contador = 0; contador < 10; contador++){
    console.log("Exibindo número: " + contador);
}

for (contador = 10; contador > 0; contador--){
    console.log("Exibindo número: " + contador);
}

var i = 0;
while(i < 10){
    console.log(i);
    if (i === 5){
        break;
    }
    i++;
}

var j = 0;
do{
    console.log(j);
    j++;
}while (j < 10);

var k = 0;
while (k < 10){
    if (k === 2 || k === 4 || k === 6 || k === 8){
        k++;
        continue;
    }
    console.log(k); 
    k++;
}

var valor = 6;
for (i = 1; i < 11; i++){
    console.log(valor + "x" + i + " = " + (valor * i));
}