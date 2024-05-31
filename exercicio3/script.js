document.addEventListener("DOMContentLoaded", function(){
    var botao = document.getElementById("botao");
    var lista = document.getElementById("lista");

botao.addEventListener("click", function(){
    var item = document.createElement("li");
    item.textContent = "novo item";
    lista.appendChild(item);
});
 });