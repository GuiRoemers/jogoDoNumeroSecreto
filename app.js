let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Acertou!'); 
        exibirTextoNaTela('p', `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');      
    } else {
          if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Tente novamente.');
        exibirTextoNaTela('p','O número secreto é menor.');
        } else {
        exibirTextoNaTela('h1', 'Tente novamente.');
        exibirTextoNaTela('p','O número secreto é maior.');
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}










