var lista = document.getElementById("lista");
var botao = document.getElementById("botao1");

botao.addEventListener("click", function(){
    while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
    }
    
});
