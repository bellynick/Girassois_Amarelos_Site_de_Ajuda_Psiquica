// Seleciona os elementos do HTML
const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
const ajudaBtn = document.getElementById("ajuda-btn");
// Conteúdo motivacional por humor
const conteudoPorHumor = {
    feliz: {
        frases: [
            "Continue espalhando essa energia positiva!",
            "Aproveite cada momento de alegria!",
            "Sua felicidade pode inspirar outras pessoas."
        ],
    },
    deprimido: {
        frases: [
            "Aproveite essa motivação para realizar algo importante!",
            "Você tem tudo o que precisa para vencer.",
            "Continue firme, seus esforços terão resultado."
        ],
    },
    pensativo: {
        frases: [
            "Aproveite essa motivação para realizar algo importante!",
            "Você tem tudo o que precisa para vencer.",
            "Continue firme, seus esforços terão resultado."
        ],
    },
    triste: {
        frases: [
            "Tudo bem não estar bem o tempo todo.",
            "Você não está sozinho, tudo vai melhorar.",
            "Seja gentil consigo mesmo hoje."
        ],
    },
    ansioso: {
        frases: [
            "Respire fundo, um passo de cada vez.",
            "Acalme sua mente, você está fazendo o seu melhor.",
            "Foque no agora, o futuro se constrói aos poucos."
        ],
    },
    motivado: {
        frases: [
            "Aproveite essa motivação para realizar algo importante!",
            "Você tem tudo o que precisa para vencer.",
            "Continue firme, seus esforços terão resultado."
        ],
    },
    neutro: {
        frases: [
            "Cada dia é uma nova oportunidade.",
            "O equilíbrio também é essencial.",
            "Cuide de si mesmo, mesmo nos dias comuns."
        ],
    }
};

// Humor padrão
let humorAtual = "neutro";

// Registrar humor
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const humor = humorInput.value.trim().toLowerCase();
    humorRegistrado.textContent = "Hoje você se sente: " + humor;

    if (conteudoPorHumor[humor]) {
        humorAtual = humor;
    } else {
        humorAtual = "neutro";
    }

    localStorage.setItem("humor", humorAtual);
    humorInput.value = "";

    // Mostrar botão de ajuda apenas se for humor negativo
    if (humorAtual === "triste" || humorAtual === "ansioso" || humorAtual === "deprimido" || humorAtual === "pensativo") {
        ajudaBtn.style.display = "inline-block";
    } else {
        ajudaBtn.style.display = "none";
    }
});

// Exibir mensagem e imagem
mensagemBtn.addEventListener("click", function() {
    const conteudo = conteudoPorHumor[humorAtual];
    const fraseAleatoria = conteudo.frases[Math.floor(Math.random() * conteudo.frases.length)];
    mensagemMotivacional.textContent = fraseAleatoria;
});

// Redirecionamento do botão de ajuda
ajudaBtn.addEventListener("click", function () {
    window.location.href = "questionario.html";
});

    const cvvInfo = document.getElementById("cvv-info");

    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recarregar a página
 cvvInfo.style.display = "block"; // Mostra a mensagem da CVV
});