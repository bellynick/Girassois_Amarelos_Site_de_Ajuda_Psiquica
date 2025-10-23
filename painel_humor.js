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
            "A felicidade é o combustível que nos impulsiona a alcançar nossos sonhos.",
            "A vida é curta demais para não aproveitar os momentos felizes. Viva-os ao máximo!",
            "Quando você está feliz, o mundo se torna um lugar mais brilhante.",
            "A felicidade não é um destino, é uma jornada cheia de momentos valiosos.",
            "Sorria, porque você está exatamente onde precisa estar.",
            "A felicidade é contagiante. Espalhe-a por onde você for.",
            "Que a alegria de hoje seja a inspiração para um amanhã ainda melhor.",
            "Felicidade é encontrar beleza até nos momentos mais simples da vida.",
            "Viva com alegria, pois é ela que transforma o ordinário em extraordinário.",
            "Ser feliz não é ter tudo, mas saber aproveitar o que a vida oferece."
        ],
    },
    deprimido: {
        frases: [
            "Dias difíceis também passam. Você é mais forte do que imagina.",
            "Permita-se sentir, mas nunca se esqueça de que você vai superar isso.",
            "A tristeza faz parte da caminhada, mas não define quem você é.",
            "Cada amanhecer traz uma nova chance de recomeçar.",
            "Respire fundo. Um passo de cada vez já é progresso.",
            "Você não está sozinho. Tudo bem não estar bem o tempo todo.",
            "Mesmo nas noites mais escuras, as estrelas continuam brilhando.",
            "O tempo cura, e a sua força te leva adiante.",
            "A dor que você sente hoje é a força que você terá amanhã.",
            "Seja gentil consigo mesmo. Você está fazendo o melhor que pode."
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
            "Dias difíceis também passam. Você é mais forte do que imagina.",
            "Permita-se sentir, mas nunca se esqueça de que você vai superar isso.",
            "A tristeza faz parte da caminhada, mas não define quem você é.",
            "Cada amanhecer traz uma nova chance de recomeçar.",
            "Respire fundo. Um passo de cada vez já é progresso.",
            "Você não está sozinho. Tudo bem não estar bem o tempo todo.",
            "Mesmo nas noites mais escuras, as estrelas continuam brilhando.",
            "O tempo cura, e a sua força te leva adiante.",
            "A dor que você sente hoje é a força que você terá amanhã.",
            "Seja gentil consigo mesmo. Você está fazendo o melhor que pode."
        ],
    },
    ansioso: {
        frases: [
            "Respire fundo. Você está no controle, mesmo que não pareça agora.",
            "A ansiedade mente. Nem tudo que você sente é realidade.",
            "Você já superou dias difíceis antes — este não será diferente.",
            "Um passo de cada vez. Você não precisa resolver tudo de uma vez.",
            "Pensamentos vêm e vão. Você não é o que pensa, você é quem observa.",
            "Está tudo bem desacelerar. Seu bem-estar vem em primeiro lugar.",
            "Lembre-se: você está seguro, aqui e agora.",
            "Permita-se pausar. O mundo pode esperar enquanto você se cuida.",
            "Você não precisa ter todas as respostas agora. Confie no processo.",
            "Sua respiração é sua âncora. Volte para ela sempre que precisar."
        ],
    },
    raivoso: {
        frases: [
            "A raiva é apenas uma chama. Respire fundo e ela se apagará.",
            "Você tem o poder de controlar suas reações. Escolha a paz em vez da raiva.",
            "Antes de reagir com raiva, dê a si mesmo um momento para refletir.",
            "A raiva pode ser uma força destrutiva. Use-a para crescer e não para se machucar.",
            "Desacelere. Sua paz interior vale mais do que a vitória de uma discussão.",
            "Cada respiração calma é um passo em direção à tranquilidade.",
            "Não permita que a raiva controle você. Lembre-se: você é mais forte que ela.",
            "Quando a raiva surgir, pause e lembre-se do que realmente importa.",
            "A raiva é temporária, mas a paz interior é duradoura.",
            "Transforme sua raiva em ação construtiva, não destrutiva."
        ],
    },
    neutro: {
        frases: [
            "A tranquilidade é a base de grandes decisões. Aproveite este momento de paz.",
            "Às vezes, a calma é onde a clareza e a sabedoria surgem.",
            "Você está no controle. Hoje é um novo dia para começar do zero.",
            "Não há pressa. O momento certo para agir virá naturalmente.",
            "A neutralidade pode ser a chave para enxergar as coisas com clareza.",
            "Mesmo quando não há grandes emoções, cada dia tem seu valor.",
            "O equilíbrio é uma força silenciosa que te guia para onde você precisa ir.",
            "Às vezes, não sentir muito é a oportunidade de simplesmente ser.",
            "Em momentos de calma, as melhores ideias e decisões podem surgir.",
            "Cada momento é uma chance de encontrar propósito, mesmo no silêncio."
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