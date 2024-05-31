var imagem = document.getElementById("foto");
var botaomenos = document.getElementById("diminuir");
var botaomais = document.getElementById("aumentar");

botaomais.addEventListener("click", function(){
     var aumentar = imagem.clientWidth;
     imagem.style.width = (aumentar + 10) + 'px';
});

botaomenos.addEventListener("click", function(){
    var diminuir = imagem.clientWidth;
    imagem.style.width = (diminuir - 10) + 'px';
});