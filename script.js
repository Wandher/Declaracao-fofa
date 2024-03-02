function fuja(){
    var botaoNao = document.getElementById("botao-nao")

    var largurJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = largurJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}