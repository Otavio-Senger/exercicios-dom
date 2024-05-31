var botao = document.getElementById("botao1");


botao.addEventListener("click", function(){
    var paragrafo = document.getElementById("contador");
    var pegarvalor = parseInt(paragrafo.textContent);
    pegarvalor++;
    paragrafo.textContent = pegarvalor;
})