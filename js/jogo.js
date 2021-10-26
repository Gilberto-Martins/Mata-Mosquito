var altura = 0
var largura = 0
var vidas = 1 //remover pontos de vida
var tempo =  11 //tempo de uma rodada de jogo
var cronometro = setInterval(function(){
    tempo -= 1
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criarMosquito)
            window.location.href = "vitoria.html"
        }else{
            document.getElementById("cronometro").innerHTML = tempo
        }
    }, 1000)


//pegar o tamanho da largura e altura da páginam
function ajustaPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log("Palco altura: " + altura + "Palco largura: " + largura)
}


//lógica do jogo
function posicaoAleatoria(){
    //remover mosquito anterior(caso exista)
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()

        //remover pontos de vida
        if (vidas > 3){
            window.location.href = "game-over.html"
        }else{
            document.getElementById("vida" + vidas).src = "img/coracao_vazio.png"
        vidas++ 
        }
    }

   //gerar posições X e Y aleatórias para inserir o elemento HTML (mosquito) 
    var posicaoX = Math.abs(Math.floor(Math.random() * altura) - 150)
    var posicaoY = Math.abs(Math.floor(Math.random() * largura) - 150)

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML (mosquito) -> createElement
    var mosquito = document.createElement("img")
    mosquito.src = "/Mata-Mosquito/img/mosquito.png"
 
    //Aplicar estilo aleatório
    var num = Math.floor(Math.random() * 3 + 1)

    switch (num) {
        case 1:
            mosquito.className = "mosquito-p"
            break
        case 2:
            mosquito.className = "mosquito-m"
            break
        case 3:
            mosquito.className = "mosquito-g"
            break
        default:
            console.log("erro")
            break
    }

    //escolher posição absoluta(left, top) aleatória (altura, largura) para inserir o elemento
    mosquito.style.left = posicaoY + "px"
    mosquito.style.top = posicaoX + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function(){
        this.remove()
    }
    
    //inserir no corpo da página
    document.body.appendChild(mosquito) 
}


//Chamando as funções
ajustaPalcoJogo()
var criarMosquito = setInterval(posicaoAleatoria, 1500)




