var paragrafo = document.getElementById("campodetexto");
var botao = document.getElementById("botao1");

botao.addEventListener("click", function(){
    document.getElementById("mostrarcampo").innerText = paragrafo.value;
});