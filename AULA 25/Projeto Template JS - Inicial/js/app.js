//efeito navbar
window.onscroll = function() {navbRolagem()};

        function navbRolagem() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("navbar").style.top = "0px";
                document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.72)";
                document.getElementById("logo").style.fontSize= "16px";
                document.getElementById("logo").innerText= "JS - HOME";
                document.getElementById("logo").style.color= "yellow";
            } else {
                document.getElementById("navbar").style.top = "-4px";
                document.getElementById("navbar").style.background = "transparent";
                document.getElementById("logo").style.fontSize= "22px";
                document.getElementById("logo").innerHTML= "JS";
                document.getElementById("logo").style.color= "white";
            }
        }
        
//efeito escrever na tela
function efeitoEscrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(() => {
           elemento.innerHTML += letra
        }, 75 * i);
    });
}

const titulo  = document.getElementById('textH');
onload = efeitoEscrever(titulo);