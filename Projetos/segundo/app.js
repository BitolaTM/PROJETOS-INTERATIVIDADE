function efeitoEscrever(elemento){
    const textoA = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoA.forEach((letra, i) => {
       setTimeout(() => {
           elemento.innerHTML += letra
        }, 200 * i);
    });
}

function efeitoEscreve(elemento){
    const textoA = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoA.forEach((letra, i) => {
       setTimeout(() => {
           elemento.innerHTML += letra
        }, 9 * i);
    });
}

const t  = document.getElementById('t');
onload = efeitoEscreve(t);

const titulo  = document.getElementById('textH');
onload = efeitoEscrever(titulo);

//contador de resultados 
const cont = document.querySelectorAll('[data-counter]');
var executou = false;

function contadorAnimado(){
    const topPagina = window.pageYOffset + ((window.innerHeight * 3) / 4);  
    cont.forEach((elemCont) => {
        
        if (topPagina > (elemCont.offsetTop - 100) && executou === false){
            const valorCont = document.querySelectorAll('.counter');
            const intervalo = 100000;
            executou = true;        
            valorCont.forEach ((valor) => {
                let valorInicial = 0;
                let valorFinal = parseInt(valor.getAttribute("data-counter"));
                let duracao = Math.floor(intervalo / valorFinal);
                let contador = setInterval(() => {
                    valorInicial += 1;
                    valor.textContent = valorInicial;
                    if (valorInicial ==  valorFinal){
                        clearInterval(contador);
                    }
                }, duracao);
                            
             });
        }
    });
}

window.addEventListener('scroll', function (){
    contadorAnimado();
});
/*
$('.parallax-window').parallax({imageSrc: 'imagens/img_servicos.png'});

$(function () {
    $('.list').click(function () {
        const filtro = $(this).attr('data-filter');
        if (filtro == 'all') {
            $('.itemBox').show();
        } else {
            $('.itemBox').not('.' + filtro).hide('1000');
            $('.itemBox').show();
        }
    });

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
});


function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
  
}
 
function zoomOut() {
  var element = document.getElementById("overlay");
  element.style.display = "none";
}
*/
