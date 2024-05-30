var paragrafo = document.getElementById("campo");
var botao = document.getElementById("botao1");

botao.addEventListener ("click", function() {
     document.getElementById("paragrafomostra").innerText = paragrafo.value;
});