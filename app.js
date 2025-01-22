let listaNumerosSorteio = [];
let numeroMaximo = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1});
}


function mostrarTextoInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mostrarTextoInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        exibirTextoNaTela("h1", "Quase lá!");
        chute > numeroSecreto ? exibirTextoNaTela("p", "O número é menor") : exibirTextoNaTela ("p", "O número secreto é maior");
        tentativas++;
        limparCampo();
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(((Math.random() * numeroMaximo) +1));
    let quantidadeElementosLista = listaNumerosSorteio.length;
    
    if (quantidadeElementosLista == numeroMaximo){
        listaNumerosSorteio = [];
    }

    if (listaNumerosSorteio.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaNumerosSorteio.push(numeroEscolhido);
        console.log(listaNumerosSorteio);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mostrarTextoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

