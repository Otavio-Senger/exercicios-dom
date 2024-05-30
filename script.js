var paragrafo = document.getElementById("campo");
var botao1 = document.getElementById("botao1");

botao1.addEventListener ("click", function() {
     document.getElementById("paragrafomostra").innerText = paragrafo.value;
});