var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
var operacao = prompt("Digite a operação:");

function calculadora(x, y, operacao){
    if (operacao === "+"){
        return parseInt(x) + parseInt(y);
    }else if (operacao === "-"){
        return parseInt(x) - parseInt(y);
    }else if (operacao === "*"){
        return parseFloat(x) * parseFloat(y);
    }else if (operacao === "/"){
        return parseFloat(x) / parseFloat(y);
    }else{
        return console.log("Não foi possível realizar a operação");
    }
}

console.log(calculadora(numero1,numero2,operacao));