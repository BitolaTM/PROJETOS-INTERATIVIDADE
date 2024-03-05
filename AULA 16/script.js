const RESULTADO = document.querySelector('.result');

function inserir(valor){
    RESULTADO.innerHTML += valor;
}

function limpar(){
    RESULTADO.innerHTML = '';
}

function apagar(){
    if(RESULTADO.textContent){
        let remove = document.querySelector('.result').innerHTML;
        RESULTADO.innerHTML = remove.substring(0, remove.length - 1);
    }
}

function confirmar(){
    if(RESULTADO.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(RESULTADO.innerHTML);
    }
}