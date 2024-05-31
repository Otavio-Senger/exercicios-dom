var btnmostrar = document.getElementById("mostrar");
var btnesconder = document.getElementById("esconder");
var imagem = document.getElementById("foto");

btnesconder.addEventListener("click", function(){
    imagem.style.display = 'none';
});
btnmostrar.addEventListener("click", function(){
    imagem.style.display = 'block';
});