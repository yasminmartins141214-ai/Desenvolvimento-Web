// Pegamos os elementos do HTML

const botaoComecar = document.getElementById("botaoComecar");

const botaoReiniciar = document.getElementById("botaoReiniciar");

const status = document.getElementById("status");

const etapa = document.getElementById("etapa");

const barraProgresso = document.getElementById("barraProgresso");

const agulha = document.querySelector(".agulha");

const urso = document.querySelector(".urso");


// Número atual da etapa

let etapaAtual = 0;


// Quantidade total de etapas

const totalEtapas = 6;


// Função principal

function comecarCroche() {

    // Evita começar novamente enquanto já está fazendo

    if (etapaAtual > 0) {
        return;
    }

    // Começa a animação da agulha

    agulha.classList.add("crochando");

    // Desabilita o botão

    botaoComecar.disabled = true;

    botaoComecar.textContent = "🧶 Fazendo o ursinho...";

    // Inicia a primeira etapa

    proximaEtapa();
}


// Função responsável pelas etapas

function proximaEtapa() {

    etapaAtual++;

    // Atualiza o texto da etapa

    etapa.textContent =
        `Etapa ${etapaAtual} de ${totalEtapas}`;


    // Calcula a porcentagem

    const porcentagem =
        (etapaAtual / totalEtapas) * 100;


    // Atualiza a barra

    barraProgresso.style.width =
        porcentagem + "%";


    // Verifica qual etapa está acontecendo

    if (etapaAtual === 1) {

        status.textContent =
            "🧶 Preparando o fio...";

    }

    else if (etapaAtual === 2) {

        status.textContent =
            "🪡 Fazendo os primeiros pontos...";

    }

    else if (etapaAtual === 3) {

        status.textContent =
            "🐻 Criando a cabeça do ursinho...";

        urso.classList.add("mostrar");

        urso.style.transform =
            "translateX(-50%) scale(0.45)";
    }

    else if (etapaAtual === 4) {

        status.textContent =
            "🐻 Fazendo o corpinho...";

        urso.style.transform =
            "translateX(-50%) scale(0.65)";
    }

    else if (etapaAtual === 5) {

        status.textContent =
            "🧶 Fazendo braços e pés...";

        urso.style.transform =
            "translateX(-50%) scale(0.85)";
    }

    else if (etapaAtual === 6) {

        status.textContent =
            "💕 Ursinho terminado!";

        urso.style.transform =
            "translateX(-50%) scale(1)";

        finalizar();
    }


    // Continua para a próxima etapa

    if (etapaAtual < totalEtapas) {

        setTimeout(proximaEtapa, 1800);

    }

}


// Função que finaliza o processo

function finalizar() {

    // Para a animação da agulha

    agulha.classList.remove("crochando");

    // Muda o texto do botão

    botaoComecar.textContent =
        "✨ Crochê finalizado!";

}


// Função para reiniciar

function reiniciar() {

    // Volta para a primeira etapa

    etapaAtual = 0;


    // Volta os textos

    status.textContent =
        "Pronta para começar?";

    etapa.textContent =
        "Etapa 0 de 6";


    // Zera a barra

    barraProgresso.style.width = "0%";


    // Esconde o ursinho

    urso.classList.remove("mostrar");

    urso.style.transform =
        "translateX(-50%) scale(0)";


    // Para a animação

    agulha.classList.remove("crochando");


    // Ativa novamente o botão

    botaoComecar.disabled = false;

    botaoComecar.textContent =
        "🧶 Começar a fazer crochê";
}