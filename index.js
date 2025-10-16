// Aguarda o DOM carregar antes de rodar
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container-list");

  function shuffleContainers() {
    const boxes = Array.from(container.children);

    // Embaralhar (algoritmo Fisher-Yates)
    for (let i = boxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }

    // Reordenar os elementos
    boxes.forEach(box => container.appendChild(box));
  }

  // Chama a função a cada 10 segundos
  setInterval(shuffleContainers, 10000);
});