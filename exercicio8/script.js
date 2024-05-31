var check = document.getElementById("caixa");
var paragrafo = document.getElementById("paragrafo");

check.addEventListener('change', function(){
if (this.checked) {
    paragrafo.textContent = "Caixa marcada!";
}else{
    paragrafo.textContent = "caixa desmarcada!";
}
});