window.onscroll = function () { navbRolagem() }

function navbRolagem() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.72)";
        document.getElementById("logo").style.fontSize = "16px";
        document.getElementById("logo").innerText = "JS - HOME";
        document.getElementById("logo").style.color = "yellow";
    } else {
        document.getElementById("navbar").style.top = "-5";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("logo").style.fontSize = "22px";
        document.getElementById("logo").innerText = "JS";
        document.getElementById("logo").style.color = "white";
    }
}

function efeitoEscrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * i);
    });
}

const titulo = document.getElementById('textH');
onload = efeitoEscrever(titulo);

const valorCont = document.querySelectorAll('.counter');
const intervalo = 7000;

const cont = document.querySelectorAll('[data-counter]');
var executou = false;

function contadorAnimado() {
    const topPagina = window.pageYOffset + ((window.innerHeight * 3) / 4);

    cont.forEach((elemCont) => {
        if (topPagina > (elemCont.offsetTop - 100) && executou == false) {
            valorCont.forEach((valor) => {
                let valorInicial = 0;
                let valorFinal = parseInt(valor.getAttribute("data-counter"));
                let duracao = Math.floor(intervalo / valorFinal);
                executou = true;
                let contador = setInterval(() => {
                    valorInicial += 1;
                    valor.textContent = valorInicial;
                    if (valorInicial == valorFinal) {
                        clearInterval(contador);
                    }
                }, duracao);
            });
        }
    });
}

window.addEventListener('scroll', function () {
    contadorAnimado();
})

$('.parallax-window').parallax({ imageSrc: 'imagens/img_home.png' });

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

var modal = document.getElementById("worksModal");
var img = document.querySelectorAll(".worksImg");
var modalImg = document.getElementById("modal");
var legenda = document.getElementById("caption");
var srcImg = "";

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        modal.style.display = "block";
        srcImg = img[i].getAttribute('src');
        modalImg.setAttribute('src', srcImg);
        legenda.innerHTML = this.alt;
    })
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}